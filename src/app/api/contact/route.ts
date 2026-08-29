import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const DEFAULT_PLATFORM_API_BASE_URL =
  "https://app.titanobservatory.org/api";

function platformContactUrl(): string {
  const baseUrl = (
    process.env.PLATFORM_API_BASE_URL ?? DEFAULT_PLATFORM_API_BASE_URL
  ).replace(/\/+$/, "");

  return `${baseUrl}/contact`;
}

export async function POST(request: NextRequest) {
  const headers = new Headers({
    Accept: "application/json",
    "Content-Type": request.headers.get("content-type") ?? "application/json",
  });
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) headers.set("X-Forwarded-For", forwardedFor);

  try {
    const upstream = await fetch(platformContactUrl(), {
      method: "POST",
      headers,
      body: await request.text(),
      cache: "no-store",
      signal: AbortSignal.timeout(15_000),
    });
    const responseHeaders = new Headers();
    responseHeaders.set(
      "Content-Type",
      upstream.headers.get("content-type") ?? "application/json",
    );

    const retryAfter = upstream.headers.get("retry-after");
    if (retryAfter) responseHeaders.set("Retry-After", retryAfter);

    return new NextResponse(await upstream.text(), {
      status: upstream.status,
      headers: responseHeaders,
    });
  } catch (error) {
    console.error("Unable to reach the Titan Platform contact API:", error);
    return NextResponse.json(
      { error: "The contact service is temporarily unavailable." },
      { status: 502 },
    );
  }
}
