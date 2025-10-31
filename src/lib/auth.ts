import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcrypt";

import { prisma } from "@/lib/prisma";

const authSecret = process.env.AUTH_SECRET;

if (!authSecret) {
  throw new Error("AUTH_SECRET is required to initialize NextAuth. Set it in your environment.");
}

const adminEmailSet = new Set(
  (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map(email => email.trim().toLowerCase())
    .filter(Boolean),
);

if (process.env.NODE_ENV !== "production" && adminEmailSet.size === 0) {
  console.warn("ADMIN_EMAILS env var is empty; no accounts will be treated as admin.");
}

export function isAdminEmail(email?: string | null) {
  if (!email) return false;
  if (adminEmailSet.size === 0) return false;
  return adminEmailSet.has(email.toLowerCase());
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        const user = await prisma.user.findUnique({ where: { email: credentials.email } });
        if (!user) return null;

        const valid = await bcrypt.compare(credentials.password, user.password);
        if (!valid) return null;

        return { id: String(user.id), email: user.email, name: user.name ?? undefined };
      },
    }),
  ],
  session: { strategy: "jwt" },
  secret: authSecret,
  callbacks: {
    async jwt({ token, user }) {
      if (user?.email) {
        token.isAdmin = isAdminEmail(user.email);
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.isAdmin = Boolean(token.isAdmin);
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};
