import { NextRequest, NextResponse } from "next/server";
import { getLinkedInImageDownloadUrl, isLinkedInImageUrn } from "@/lib/linkedin-posts";

export const revalidate = 1800;

export async function GET(request: NextRequest) {
  const urn = request.nextUrl.searchParams.get("urn") ?? "";
  if (!isLinkedInImageUrn(urn)) {
    return new NextResponse(null, { status: 404 });
  }

  const downloadUrl = await getLinkedInImageDownloadUrl(urn);
  if (!downloadUrl) {
    return new NextResponse(null, { status: 404 });
  }

  const image = await fetch(downloadUrl, { next: { revalidate: 1800 } });
  if (!image.ok || !image.body) {
    return new NextResponse(null, { status: 404 });
  }

  return new NextResponse(image.body, {
    headers: {
      "Content-Type": image.headers.get("Content-Type") ?? "image/jpeg",
      "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=86400",
    },
  });
}
