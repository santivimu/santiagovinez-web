import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/lib/posts";
import { site } from "@/lib/site-data";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: site.name },
  };

  return (
    <article className="mx-auto max-w-2xl px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <Link href="/blog" className="text-sm text-accent hover:text-accent-soft">
        ← Blog
      </Link>

      <p className="mt-6 text-xs text-foreground-muted/70">
        {new Date(`${post.date}T12:00:00`).toLocaleDateString("es-CO", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <h1 className="mt-2 font-display text-4xl tracking-tight md:text-5xl">
        {post.title}
      </h1>

      <div className="mt-10 space-y-6 text-foreground-muted">
        {post.content.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-14 rounded-2xl border border-border/60 bg-background-alt/40 p-6">
        <p className="text-sm text-foreground-muted">
          Si esto te resuena, el libro{" "}
          <Link href="/libros" className="text-accent hover:text-accent-soft">
            El Poder es Tú-Yo
          </Link>{" "}
          profundiza en este mismo trabajo.
        </p>
      </div>
    </article>
  );
}
