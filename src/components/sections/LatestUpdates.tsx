import { CommunityEditorial } from "@/components/sections/CommunityEditorial";
import { getCommunityStories } from "@/lib/linkedin-posts";

export async function LatestUpdates({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  const stories = await getCommunityStories();
  return <CommunityEditorial stories={stories} headingLevel={headingLevel} />;
}
