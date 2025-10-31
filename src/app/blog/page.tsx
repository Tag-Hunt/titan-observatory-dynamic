import PostCard from "@/components/PostCard";

type BlogPost = {
  id: number;
  title: string;
  slug: string;
  content: string;
  createdAt: string;
  author: { id: number | null; name: string | null } | null;
};

const API_BASE_URL = process.env.NEXTAUTH_URL ?? process.env.NEXT_PUBLIC_SITE_URL ?? "";

async function fetchPosts(): Promise<BlogPost[]> {
  const url = API_BASE_URL ? new URL("/api/posts", API_BASE_URL).toString() : "/api/posts";

  try {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) {
      console.error("Failed to load posts", response.statusText);
      return [];
    }
    const data = await response.json();
    return Array.isArray(data) ? (data as BlogPost[]) : [];
  } catch (error) {
    console.error("Failed to load posts", error);
    return [];
  }
}

export default async function Blog() {
  const posts = await fetchPosts();
  return (
    <main className="titan-section space-y-6 p-8">
      <div>
        <h1 className="text-3xl font-bold">Community Updates</h1>
        <p className="mt-2 text-sm text-titan-text-muted">
          Shop notes, road-trip stories, and engineering updates from the Titan crew.
        </p>
      </div>
      <div className="space-y-4">
        {posts.length === 0 && <p className="text-sm text-titan-text-muted">No posts yet.</p>}
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
