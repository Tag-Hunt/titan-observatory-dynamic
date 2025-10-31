type PostAuthor = {
  id: number | null;
  name: string | null;
};

type PostCardProps = {
  post: {
    id: number;
    title: string;
    slug: string;
    content: string;
    createdAt: string | Date;
    author: PostAuthor | null;
  };
};

export default function PostCard({ post }: PostCardProps) {
  const publishedAt = new Date(post.createdAt);
  const authorName = post.author?.name?.trim() || "Titan Observatory Team";
  const formattedDate = Number.isNaN(publishedAt.getTime()) ? "Recently" : publishedAt.toLocaleString();

  return (
    <article className="titan-card space-y-3 p-5">
      <h2 className="text-xl font-semibold text-titan-text-secondary">{post.title}</h2>
      <p className="text-xs text-titan-text-muted">
        {formattedDate} · {authorName}
      </p>
      <p className="whitespace-pre-wrap text-sm leading-relaxed text-titan-text-primary">{post.content}</p>
    </article>
  );
}
