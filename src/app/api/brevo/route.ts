// app/api/subscribe-brevo/route.ts
import { NextRequest, NextResponse } from "next/server";

const BREVO_API = "https://api.brevo.com/v3/contacts/doubleOptinConfirmation";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, company, ...attributes } = body;

    // Honeypot
    if (company) return NextResponse.json({ ok: true });

    if (typeof email !== "string" || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const payload = {
      email,
      attributes, // e.g., { FIRSTNAME: "Ada" }
      includeListIds: [Number(process.env.BREVO_LIST_ID!)],
      templateId: Number(process.env.BREVO_DOI_TEMPLATE_ID!),
      redirectionUrl: process.env.BREVO_DOI_REDIRECT_URL || "https://yourdomain.org/thanks",
    };

    const r = await fetch(BREVO_API, {
      method: "POST",
      headers: {
        "api-key": process.env.BREVO_API_KEY as string,
        "content-type": "application/json",
        "accept": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (!r.ok) {
      const t = await r.text();
      return NextResponse.json({ error: t || "Upstream error" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
