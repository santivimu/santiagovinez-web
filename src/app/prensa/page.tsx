import type { Metadata } from "next";
import { site, book, background } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Prensa",
  description: `Media kit de ${site.name}: biografía, temas de entrevista y datos de contacto para medios.`,
};

const temas = [
  "Autoconocimiento como base del liderazgo",
  "De una carrera corporativa en multinacionales a guiar procesos de transformación personal",
  "El Método Tú-Yo: observar, cuestionar, aceptar, gobernar, expresar",
  "Establecimiento de metas conscientes en entornos de alta exigencia",
];

export default function Prensa() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">
        Prensa
      </p>
      <h1 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">
        Media kit
      </h1>
      <p className="mt-4 text-foreground-muted">
        Disponible para entrevistas, podcasts y colaboraciones editoriales sobre
        autoconocimiento, liderazgo personal y desarrollo humano.
      </p>

      <div className="mt-14">
        <h2 className="font-display text-2xl tracking-tight">Biografía corta</h2>
        <p className="mt-4 text-foreground-muted">
          {site.name} es autor del libro <em className="not-italic font-serif">{book.title}</em>{" "}
          ({book.publisher}, {book.year}), creador del Método Tú-Yo y guía en procesos de
          autoconocimiento. Antes de dedicarse por completo a este trabajo, pasó más de una
          década en marketing y desarrollo de negocio en multinacionales como Pfizer y Aspen.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="font-display text-2xl tracking-tight">Biografía larga</h2>
        <p className="mt-4 text-foreground-muted">{background.summary}</p>
        <p className="mt-4 text-foreground-muted">
          Su libro <em className="not-italic font-serif">{book.title}</em> fue presentado en
          FILBO 2022 y propone un proceso de autoconocimiento para revelar el poder que ya
          existe en cada persona. Hoy comparte ese trabajo en talleres, conferencias, coaching
          individual y una edición en inglés en preparación:{" "}
          <em className="not-italic font-serif">{book.englishTitle}</em>.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="font-display text-2xl tracking-tight">Temas para entrevista</h2>
        <ul className="mt-4 space-y-2 text-foreground-muted">
          {temas.map((t) => (
            <li key={t} className="flex gap-2">
              <span className="text-accent">—</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-14 rounded-2xl border border-border/60 bg-background-alt/40 p-6">
        <p className="font-medium text-foreground">Contacto de prensa</p>
        <a
          href={`mailto:${site.email}?subject=Contacto%20de%20prensa`}
          className="mt-2 block text-accent hover:text-accent-soft"
        >
          {site.email}
        </a>
        <p className="mt-1 text-sm text-foreground-muted">{site.phoneDisplay}</p>
      </div>
    </div>
  );
}
