"use client";

import { useState } from "react";

const SLUG_PATTERN = /^[a-z0-9-]+$/;

export default function DashboardForm() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState<string | undefined>();

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(undefined);

    const trimmedTitle = title.trim();
    const normalizedSlug = slug.trim().toLowerCase();
    const trimmedContent = content.trim();

    if (!trimmedTitle) {
      setMessage("Title is required.");
      return;
    }

    if (!normalizedSlug || !SLUG_PATTERN.test(normalizedSlug)) {
      setMessage("Slug must use lowercase letters, numbers, or hyphens.");
      return;
    }

    if (!trimmedContent) {
      setMessage("Content cannot be empty.");
      return;
    }

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: trimmedTitle, slug: normalizedSlug, content: trimmedContent }),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({ error: "Failed to create post." }));
        setMessage(payload.error || "Failed to create post.");
        return;
      }

      setTitle("");
      setSlug("");
      setContent("");
      setMessage("Post created!");
    } catch {
      setMessage("Network error while creating the post.");
    }
  }

  return (
    <form onSubmit={submit} className="titan-section max-w-xl space-y-4 p-6">
      <input
        className="titan-input w-full"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <input
        className="titan-input w-full"
        placeholder="Slug (lowercase-with-hyphens)"
        value={slug}
        onChange={e => setSlug(e.target.value)}
        required
      />
      <textarea
        className="titan-input w-full min-h-[160px]"
        placeholder="Content"
        value={content}
        onChange={e => setContent(e.target.value)}
        required
      />
      {message && <p className="text-sm text-titan-text-secondary">{message}</p>}
      <button className="titan-button" type="submit">
        Publish
      </button>
    </form>
  );
}
