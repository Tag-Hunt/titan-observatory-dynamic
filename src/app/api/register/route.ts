import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const MIN_PASSWORD_LENGTH = 12;
const REGISTER_INVITE_CODE = process.env.REGISTER_INVITE_CODE?.trim();

type RegistrationPayload = {
  email: string;
  password: string;
  name?: string;
  inviteCode: string;
};

function parseRegistrationPayload(payload: unknown): RegistrationPayload | { error: string } {
  if (!payload || typeof payload !== "object") {
    return { error: "Invalid payload" };
  }

  const body = payload as Record<string, unknown>;

  const email = typeof body.email === "string" ? body.email.trim() : "";
  const password = typeof body.password === "string" ? body.password : "";
  const name = typeof body.name === "string" ? body.name.trim() : undefined;
  const inviteCode = typeof body.inviteCode === "string" ? body.inviteCode.trim() : "";

  if (!email || !EMAIL_REGEX.test(email)) {
    return { error: "Valid email required" };
  }

  if (password.length < MIN_PASSWORD_LENGTH) {
    return { error: "Password too short" };
  }

  if (!inviteCode) {
    return { error: "Invite code required" };
  }

  return { email, password, name, inviteCode };
}

export async function POST(req: Request) {
  if (!REGISTER_INVITE_CODE) {
    return NextResponse.json({ error: "Registration is currently disabled" }, { status: 403 });
  }

  const body = await req.json().catch(() => null);
  const parsed = parseRegistrationPayload(body);

  if ("error" in parsed) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  if (parsed.inviteCode !== REGISTER_INVITE_CODE) {
    return NextResponse.json({ error: "Invalid invite code" }, { status: 403 });
  }

  const existingUser = await prisma.user.findUnique({ where: { email: parsed.email } });
  if (existingUser) {
    return NextResponse.json({ error: "Email already in use" }, { status: 409 });
  }

  const passwordHash = await bcrypt.hash(parsed.password, 12);
  const user = await prisma.user.create({
    data: { email: parsed.email, password: passwordHash, name: parsed.name },
    select: { id: true, email: true, name: true },
  });

  return NextResponse.json(user);
}
