"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const MIN_PASSWORD_LENGTH = 12;

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const [error, setError] = useState<string | undefined>();
  const router = useRouter();

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(undefined);

    if (password.length < MIN_PASSWORD_LENGTH) {
      setError(`Password must be at least ${MIN_PASSWORD_LENGTH} characters.`);
      return;
    }

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, name, inviteCode }),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({ error: "Registration failed" }));
        setError(payload.error || "Registration failed");
        return;
      }

      router.push("/login");
    } catch {
      setError("Something went wrong. Please try again.");
    }
  }

  return (
    <main className="titan-section max-w-md space-y-6 p-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Create account</h1>
        <p className="text-sm text-titan-text-muted">
          Accounts require a private invite code and a strong password (12+ characters).
        </p>
      </div>
      <form onSubmit={submit} className="space-y-4">
        <input
          className="titan-input w-full"
          placeholder="Name (optional)"
          value={name}
          onChange={e => setName(e.target.value)}
          autoComplete="name"
        />
        <input
          className="titan-input w-full"
          placeholder="Email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          autoComplete="email"
          required
        />
        <input
          className="titan-input w-full"
          placeholder="Password (12+ characters)"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoComplete="new-password"
          required
        />
        <input
          className="titan-input w-full"
          placeholder="Invite code"
          value={inviteCode}
          onChange={e => setInviteCode(e.target.value)}
          required
        />
        {error && <p className="text-sm text-titan-red">{error}</p>}
        <button className="titan-button w-full">Register</button>
      </form>
    </main>
  );
}
