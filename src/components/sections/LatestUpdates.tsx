import { CommunityEditorial } from "@/components/sections/CommunityEditorial";
import { getCommunityStories } from "@/lib/linkedin-posts";

export async function LatestUpdates() {
  const stories = await getCommunityStories();
  return <CommunityEditorial stories={stories} />;
}
