import { latestUpdates, type CommunityStory } from "@/lib/home-content";

const POST_LIMIT = 5;
const REVALIDATE_SECONDS = 1800;
const IMAGE_URN = /^urn:li:image:[A-Za-z0-9_-]+$/;
const COMPANY_PAGE = "https://www.linkedin.com/company/pilotpulse-ai/";
const BROWSER_UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36";

type LinkedInJsonLdPost = {
  "@type"?: string;
  url?: string;
  mainEntityOfPage?: string;
  text?: string;
  datePublished?: string;
};

type LinkedInMedia = {
  id?: string;
};

type LinkedInPostElement = {
  id?: string;
  commentary?: string;
  publishedAt?: number;
  createdAt?: number;
  content?: {
    media?: LinkedInMedia;
    multiImage?: { images?: LinkedInMedia[] };
    article?: { thumbnail?: string };
  };
};

type LinkedInPostsResponse = {
  elements?: LinkedInPostElement[];
};

type LinkedInImageResponse = {
  downloadUrl?: string;
};

export function isLinkedInImageUrn(urn: string) {
  return IMAGE_URN.test(urn);
}

function linkedInHeaders(token: string) {
  return {
    Authorization: `Bearer ${token}`,
    "LinkedIn-Version": "202411",
    "X-Restli-Protocol-Version": "2.0.0",
  };
}

function formatDate(date?: Date) {
  if (!date || Number.isNaN(date.getTime())) return undefined;
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function toStory(text: string, href: string, date?: Date, image?: string): CommunityStory {
  const tags = Array.from(text.matchAll(/#([A-Za-z0-9_]+)/g), (match) => match[1]);
  const cleaned = text.replace(/#\w+/g, "").replace(/\s+/g, " ").trim();
  const sentence = cleaned.match(/^.+?[.!?]\s/)?.[0].trim() || cleaned;
  const title = sentence.length > 72 ? `${sentence.slice(0, 69).trimEnd()}…` : sentence;
  const remainder = cleaned.slice(sentence.length).trim();

  return {
    category: tags[0]?.replace(/([a-z])([A-Z])/g, "$1 $2") || "Update",
    title: title || "Update from PilotPulse",
    description: remainder || cleaned,
    href,
    date: formatDate(date),
    image,
  };
}

function decodeXml(value: string) {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function imageUrnFromPost(element: LinkedInPostElement) {
  const candidates = [
    element.content?.media?.id,
    element.content?.multiImage?.images?.[0]?.id,
    element.content?.article?.thumbnail,
  ];
  return candidates.find((value) => value && isLinkedInImageUrn(value));
}

function linkedInImageSrc(urn: string) {
  return `/api/linkedin-image?urn=${encodeURIComponent(urn)}`;
}

function rssImage(item: string) {
  const enclosureTag = item.match(/<enclosure\b[^>]*>/i)?.[0];
  const enclosureUrl = enclosureTag?.match(/\burl=["']([^"']+)["']/i)?.[1];
  const enclosureType = enclosureTag?.match(/\btype=["']([^"']+)["']/i)?.[1] ?? "";
  if (
    enclosureUrl &&
    (enclosureType.startsWith("image/") || /\.(jpe?g|png|webp|gif)(\?|$)/i.test(enclosureUrl))
  ) {
    return decodeXml(enclosureUrl);
  }

  const media = item.match(/<media:(?:content|thumbnail)\b[^>]*\burl=["']([^"']+)["']/i)?.[1];
  return media ? decodeXml(media) : undefined;
}

function parseRss(xml: string): CommunityStory[] {
  const items = xml.match(/<item[\s\S]*?<\/item>/gi) ?? xml.match(/<entry[\s\S]*?<\/entry>/gi) ?? [];

  return items.slice(0, POST_LIMIT).flatMap((item) => {
    const title = decodeXml(item.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? "");
    const href = decodeXml(
      item.match(/<link[^>]*href=["']([^"']+)["']/i)?.[1] ??
        item.match(/<link[^>]*>([\s\S]*?)<\/link>/i)?.[1] ??
        "",
    );
    const rawBody = decodeXml(
      item.match(/<description[^>]*>([\s\S]*?)<\/description>/i)?.[1] ??
        item.match(/<content[^>]*>([\s\S]*?)<\/content>/i)?.[1] ??
        item.match(/<summary[^>]*>([\s\S]*?)<\/summary>/i)?.[1] ??
        "",
    );
    const dateValue =
      item.match(/<pubDate[^>]*>([\s\S]*?)<\/pubDate>/i)?.[1] ??
      item.match(/<published[^>]*>([\s\S]*?)<\/published>/i)?.[1] ??
      item.match(/<updated[^>]*>([\s\S]*?)<\/updated>/i)?.[1];
    if (!href) return [];
    const story = toStory(
      rawBody || title,
      href,
      dateValue ? new Date(dateValue) : undefined,
      rssImage(item),
    );
    return [{ ...story, title: title || story.title }];
  });
}

async function fetchLinkedInApi(): Promise<CommunityStory[] | null> {
  const token = process.env.LINKEDIN_ACCESS_TOKEN;
  const orgId = process.env.LINKEDIN_ORG_ID;
  if (!token || !orgId) return null;

  const author = encodeURIComponent(`urn:li:organization:${orgId}`);
  const response = await fetch(
    `https://api.linkedin.com/rest/posts?q=author&author=${author}&count=${POST_LIMIT}&sortBy=LAST_MODIFIED`,
    {
      headers: linkedInHeaders(token),
      next: { revalidate: REVALIDATE_SECONDS },
    },
  );

  if (!response.ok) return null;

  const data = (await response.json()) as LinkedInPostsResponse;
  return (data.elements ?? []).slice(0, POST_LIMIT).flatMap((element) => {
    const text = element.commentary?.trim();
    if (!text) return [];
    const timestamp = element.publishedAt ?? element.createdAt;
    const urn = element.id ?? "";
    const href = urn
      ? `https://www.linkedin.com/feed/update/${encodeURIComponent(urn)}`
      : latestUpdates.linkedIn.href;
    const imageUrn = imageUrnFromPost(element);
    return [
      toStory(
        text,
        href,
        timestamp ? new Date(timestamp) : undefined,
        imageUrn ? linkedInImageSrc(imageUrn) : undefined,
      ),
    ];
  });
}

async function fetchOgImage(url: string): Promise<string | undefined> {
  const response = await fetch(url, {
    headers: { "User-Agent": BROWSER_UA, "Accept-Language": "en-US,en;q=0.9" },
    next: { revalidate: REVALIDATE_SECONDS },
  });
  if (!response.ok) return undefined;
  const html = await response.text();
  return html.match(/property="og:image" content="([^"]+)"/)?.[1]?.replace(/&amp;/g, "&");
}

async function fetchPublicCompanyPosts(): Promise<CommunityStory[] | null> {
  const response = await fetch(COMPANY_PAGE, {
    headers: { "User-Agent": BROWSER_UA, "Accept-Language": "en-US,en;q=0.9" },
    next: { revalidate: REVALIDATE_SECONDS },
  });
  if (!response.ok) return null;

  const html = await response.text();
  const raw = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
  if (!raw) return null;

  const data = JSON.parse(raw) as { "@graph"?: LinkedInJsonLdPost[] };
  const posts = (data["@graph"] ?? []).filter(
    (item) => item["@type"] === "DiscussionForumPosting" && item.text?.trim(),
  );

  const stories = await Promise.all(
    posts.slice(0, POST_LIMIT).map(async (post) => {
      const href = post.url || post.mainEntityOfPage || "";
      const image = href ? await fetchOgImage(href) : undefined;
      return toStory(
        post.text ?? "",
        href,
        post.datePublished ? new Date(post.datePublished) : undefined,
        image,
      );
    }),
  );

  const usable = stories.filter((story) => story.href);
  return usable.length ? usable : null;
}

async function fetchLinkedInRss(): Promise<CommunityStory[] | null> {
  const feedUrl = process.env.LINKEDIN_RSS_URL;
  if (!feedUrl) return null;

  const response = await fetch(feedUrl, { next: { revalidate: REVALIDATE_SECONDS } });
  if (!response.ok) return null;
  const xml = await response.text();
  const posts = parseRss(xml);
  return posts.length ? posts : null;
}

export async function getLinkedInImageDownloadUrl(urn: string): Promise<string | null> {
  const token = process.env.LINKEDIN_ACCESS_TOKEN;
  if (!token || !isLinkedInImageUrn(urn)) return null;

  const response = await fetch(`https://api.linkedin.com/rest/images/${encodeURIComponent(urn)}`, {
    headers: linkedInHeaders(token),
    next: { revalidate: REVALIDATE_SECONDS },
  });
  if (!response.ok) return null;

  const data = (await response.json()) as LinkedInImageResponse;
  return data.downloadUrl?.trim() || null;
}

export async function getCommunityStories(): Promise<CommunityStory[]> {
  try {
    const fromApi = await fetchLinkedInApi();
    if (fromApi?.length) return fromApi.slice(0, POST_LIMIT);
  } catch {
    // Fall through to RSS, then curated stories.
  }

  try {
    const fromPublic = await fetchPublicCompanyPosts();
    if (fromPublic?.length) return fromPublic.slice(0, POST_LIMIT);
  } catch {
    // Fall through to RSS, then curated stories.
  }

  try {
    const fromRss = await fetchLinkedInRss();
    if (fromRss?.length) return fromRss.slice(0, POST_LIMIT);
  } catch {
    // Fall through to curated stories.
  }

  return latestUpdates.stories;
}
