import type { Metadata } from "next";
import { services, site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Conferencias y talleres",
  description:
    "Charlas, talleres y programas de formación en autoconocimiento, liderazgo y comunicación para empresas y equipos.",
};

const faqs = [
  {
    q: "¿Cuánto dura un taller?",
    a: "Los talleres principales (como Establecimiento de Metas Conscientes) tienen formato de 4 u 8 horas, virtual o presencial, con material de estudio en PDF.",
  },
  {
    q: "¿Trabajas con equipos corporativos?",
    a: "Sí. Diseño e implemento programas de desarrollo de habilidades según los objetivos de cada empresa: consolidar equipos, mejorar el ambiente laboral y aumentar el sentido de pertenencia.",
  },
  {
    q: "¿Cómo agendo una conferencia?",
    a: `Escríbeme a ${site.email} o por WhatsApp contando el contexto de tu evento y el número aproximado de asistentes.`,
  },
];

export default function Conferencias() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">
        Conferencias y talleres
      </p>
      <h1 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">
        Programas para personas y equipos
      </h1>
      <p className="mt-4 max-w-2xl text-foreground-muted">
        Charlas, talleres y coaching individual o grupal alrededor del
        autoconocimiento, el liderazgo y la comunicación.
      </p>

      <div className="mt-12 space-y-6">
        {services.map((s) => (
          <div key={s.title} className="rounded-2xl border border-border/60 p-6">
            <h2 className="font-medium text-lg text-foreground">{s.title}</h2>
            <p className="mt-2 text-sm text-foreground-muted">{s.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="font-display text-2xl tracking-tight">
          Preguntas frecuentes
        </h2>
        <div className="mt-6 space-y-6">
          {faqs.map((f) => (
            <div key={f.q} className="border-b border-border/60 pb-6">
              <p className="font-medium text-foreground">{f.q}</p>
              <p className="mt-2 text-sm text-foreground-muted">{f.a}</p>
            </div>
          ))}
        </div>
      </div>

      <a
        href="/#contacto"
        className="mt-12 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition hover:bg-accent-soft"
      >
        Agenda una conferencia
      </a>
    </div>
  );
}
