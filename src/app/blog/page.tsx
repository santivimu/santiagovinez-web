import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Reflexiones sobre autoconocimiento, liderazgo personal y el Método Tú-Yo.",
};

export default function Blog() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">
        Blog
      </p>
      <h1 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">
        Reflexiones sobre autoconocimiento
      </h1>

      <div className="mt-12 space-y-10">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block border-b border-border/60 pb-10 last:border-0"
          >
            <p className="text-xs text-foreground-muted/70">
              {new Date(`${post.date}T12:00:00`).toLocaleDateString("es-CO", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <h2 className="mt-2 font-display text-2xl tracking-tight hover:text-accent">
              {post.title}
            </h2>
            <p className="mt-3 text-sm text-foreground-muted">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
