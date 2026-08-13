import Link from "next/link";
import { site, method, book, services, background, channels } from "@/lib/site-data";
import { InsightTimerEmbed } from "@/components/insight-timer-embed";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto flex max-w-6xl flex-col gap-6 px-6 pb-16 pt-20 md:pt-28">
        <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">
          {site.role}
        </p>
        <h1 className="max-w-3xl font-display text-5xl leading-tight tracking-tight md:text-7xl">
          {site.tagline}
        </h1>
        <p className="max-w-2xl font-serif text-xl italic text-foreground-muted md:text-2xl">
          Guío procesos de autoconocimiento a través del {method.name}, un camino de
          cinco pasos para reconectar con lo que realmente eres.
        </p>
        <div className="mt-4 flex flex-wrap gap-4">
          <Link
            href="/#contacto"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition hover:bg-accent-soft"
          >
            Agenda una conversación
          </Link>
          <Link
            href="/libros"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition hover:border-accent hover:text-accent"
          >
            Conoce el libro
          </Link>
        </div>
      </section>

      {/* Método Tú-Yo */}
      <section className="border-t border-border/60 bg-background-alt/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-3xl tracking-tight md:text-4xl">
            {method.name}
          </h2>
          <p className="mt-4 max-w-2xl text-foreground-muted">
            Un proceso de autoconocimiento en cinco etapas, diseñado para pasar de la
            reacción automática a una vida gobernada desde la consciencia.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {method.stages.map((stage, i) => (
              <div
                key={stage.key}
                className="rounded-2xl border border-border/60 bg-background p-6"
              >
                <span className="font-display text-3xl text-accent">
                  0{i + 1}
                </span>
                <p className="mt-3 font-medium">{stage.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre mí resumen */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl tracking-tight md:text-4xl">
              15 años de desarrollo interior, ahora expresados públicamente
            </h2>
            <p className="mt-4 text-foreground-muted">{background.summary}</p>
            <ul className="mt-6 space-y-2 text-sm text-foreground-muted">
              {background.certifications.map((cert) => (
                <li key={cert} className="flex gap-2">
                  <span className="text-accent">—</span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/sobre-mi"
              className="mt-6 inline-block text-sm font-medium text-accent hover:text-accent-soft"
            >
              Leer más sobre mi historia →
            </Link>
          </div>

          <div className="rounded-2xl border border-border/60 bg-background-alt/40 p-8">
            <p className="font-display text-2xl text-accent">Filosofía</p>
            <p className="mt-4 font-serif text-lg italic text-foreground-muted">
              &ldquo;No busco ser un gurú. Soy un guía. Mi propósito es que quien me
              escuche sienta que todo es perfecto exactamente como es.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Libro */}
      <section className="border-t border-border/60 bg-background-alt/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">
                Libro
              </p>
              <h2 className="mt-3 font-display text-4xl tracking-tight">
                {book.title}
              </h2>
              <p className="mt-2 text-sm text-foreground-muted">
                {book.publisher} · {book.year} · {book.milestone}
              </p>
              <p className="mt-4 text-foreground-muted">{book.description}</p>
              <Link
                href="/libros"
                className="mt-6 inline-block rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-accent hover:text-accent"
              >
                Ver el libro
              </Link>
            </div>
            <div className="flex aspect-[3/4] items-center justify-center rounded-2xl border border-border/60 bg-background font-display text-2xl text-foreground-muted">
              {book.title}
            </div>
          </div>
        </div>
      </section>

      {/* Servicios / Conferencias */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">
          Talleres y conferencias
        </p>
        <h2 className="mt-3 font-display text-3xl tracking-tight md:text-4xl">
          Programas para personas y equipos
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-border/60 p-6"
            >
              <h3 className="font-medium text-foreground">{service.title}</h3>
              <p className="mt-2 text-sm text-foreground-muted">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <Link
          href="/conferencias"
          className="mt-8 inline-block text-sm font-medium text-accent hover:text-accent-soft"
        >
          Ver detalle de conferencias →
        </Link>
      </section>

      {/* Meditaciones */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">
            Meditaciones
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight md:text-4xl">
            Escucha en Insight Timer
          </h2>
          <p className="mt-4 max-w-2xl text-foreground-muted">
            Serie &ldquo;El poder de observarte&rdquo;, una práctica por cada etapa
            del {method.name}.
          </p>
          <div className="mt-10 max-w-xl">
            <InsightTimerEmbed />
          </div>
        </div>
      </section>

      {/* Ecosistema */}
      <section className="border-t border-border/60 bg-background-alt/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">
            Ecosistema
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight md:text-4xl">
            Sígueme donde ya estás
          </h2>
          <div className="mt-10 flex flex-wrap gap-4">
            {channels.map((c) =>
              c.url ? (
                <a
                  key={c.label}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-border px-5 py-2 text-sm hover:border-accent hover:text-accent"
                >
                  {c.label}
                </a>
              ) : (
                <span
                  key={c.label}
                  className="rounded-full border border-border/40 px-5 py-2 text-sm text-foreground-muted/50"
                >
                  {c.label}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">
              Contacto
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight md:text-4xl">
              Hablemos de tu próximo evento o proceso
            </h2>
            <p className="mt-4 max-w-md text-foreground-muted">
              Escríbeme directamente y te respondo personalmente.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a
                href={`mailto:${site.email}`}
                className="block text-accent hover:text-accent-soft"
              >
                {site.email}
              </a>
              <a
                href={`https://wa.me/${site.phone.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-accent hover:text-accent-soft"
              >
                WhatsApp: {site.phoneDisplay}
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

function ContactForm() {
  return (
    <form
      action={`mailto:${site.email}`}
      method="post"
      encType="text/plain"
      className="space-y-4 rounded-2xl border border-border/60 bg-background-alt/40 p-8"
    >
      <div>
        <label className="mb-1 block text-sm text-foreground-muted" htmlFor="nombre">
          Nombre
        </label>
        <input
          id="nombre"
          name="nombre"
          required
          className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm outline-none focus:border-accent"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm text-foreground-muted" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm outline-none focus:border-accent"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm text-foreground-muted" htmlFor="tipo">
          Tipo de consulta
        </label>
        <select
          id="tipo"
          name="tipo"
          className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm outline-none focus:border-accent"
        >
          <option>Conferencia / Keynote</option>
          <option>Evento corporativo</option>
          <option>Mentoría / Coaching</option>
          <option>Colaboración</option>
          <option>Medios</option>
          <option>Otro</option>
        </select>
      </div>
      <div>
        <label className="mb-1 block text-sm text-foreground-muted" htmlFor="mensaje">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          required
          className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm outline-none focus:border-accent"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition hover:bg-accent-soft"
      >
        Enviar mensaje
      </button>
    </form>
  );
}
