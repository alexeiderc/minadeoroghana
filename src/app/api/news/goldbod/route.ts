import { NextResponse } from "next/server";

interface GoldBodPost {
  id: number;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  link: string;
}

let cache: { data: GoldBodPost[]; timestamp: number } | null = null;
const CACHE_TTL = 60 * 60 * 1000;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const forceRefresh = searchParams.get("refresh") === "true";

  if (!forceRefresh && cache && Date.now() - cache.timestamp < CACHE_TTL) {
    return NextResponse.json({
      articles: cache.data,
      cached: true,
      lastUpdate: new Date(cache.timestamp).toISOString(),
    });
  }

  try {
    const res = await fetch(
      "https://goldbod.gov.gh/wp-json/wp/v2/posts?per_page=12&_fields=id,title,date,excerpt,link",
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      if (cache) {
        return NextResponse.json({
          articles: cache.data,
          cached: true,
          lastUpdate: new Date(cache.timestamp).toISOString(),
          stale: true,
        });
      }
      return NextResponse.json(
        { error: "Failed to fetch from GoldBod", articles: [] },
        { status: 502 }
      );
    }

    const posts: GoldBodPost[] = await res.json();

    cache = { data: posts, timestamp: Date.now() };

    return NextResponse.json({
      articles: posts,
      cached: false,
      lastUpdate: new Date(cache.timestamp).toISOString(),
    });
  } catch {
    if (cache) {
      return NextResponse.json({
        articles: cache.data,
        cached: true,
        lastUpdate: new Date(cache.timestamp).toISOString(),
        stale: true,
      });
    }
    return NextResponse.json(
      { error: "Network error", articles: [] },
      { status: 500 }
    );
  }
}
