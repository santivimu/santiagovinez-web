import type { Metadata } from "next";
import { book, site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Libro",
  description: `${book.title} — ${book.publisher}, ${book.year}.`,
};

export default function Libros() {
  const bookJsonLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title,
    author: { "@type": "Person", name: site.name },
    publisher: book.publisher,
    datePublished: String(book.year),
    inLanguage: "es",
    description: book.description,
    url: book.amazonUrl,
  };

  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookJsonLd) }}
      />

      <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">
        Libro
      </p>

      <div className="mt-6 grid gap-12 md:grid-cols-2 md:items-start">
        <div className="flex aspect-[3/4] items-center justify-center rounded-2xl border border-border/60 bg-background-alt/40 font-display text-3xl text-foreground-muted">
          {book.title}
        </div>

        <div>
          <h1 className="font-display text-4xl tracking-tight md:text-5xl">
            {book.title}
          </h1>
          <p className="mt-2 text-sm text-foreground-muted">
            {book.publisher} · {book.year} · {book.milestone}
          </p>
          <p className="mt-6 text-foreground-muted">{book.description}</p>

          <div className="mt-8 rounded-2xl border border-border/60 bg-background-alt/40 p-6">
            <p className="font-display text-lg text-accent">
              {book.englishTitle}
            </p>
            <p className="mt-2 text-sm text-foreground-muted">
              {book.englishStatus}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={book.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition hover:bg-accent-soft"
            >
              Comprar en Amazon
            </a>
            <a
              href="mailto:santiagovinez@gmail.com?subject=Quiero%20el%20libro%20El%20Poder%20es%20T%C3%BA-Yo"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-accent hover:text-accent"
            >
              Escríbeme directamente
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
