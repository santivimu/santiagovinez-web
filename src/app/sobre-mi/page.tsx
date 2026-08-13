import type { Metadata } from "next";
import { site, background, method } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Sobre mí",
  description: `La historia de ${site.name}: de la marca y las multinacionales al autoconocimiento.`,
};

const faqs = [
  {
    q: "¿Qué es el Método Tú-Yo?",
    a: `Es un proceso de autoconocimiento en cinco etapas — ${method.stages
      .map((s) => s.label)
      .join(", ")} — que ayuda a pasar de la reacción automática a una vida gobernada desde la consciencia.`,
  },
  {
    q: "¿Trabajas con empresas o solo con personas?",
    a: "Ambos. Diseño programas de formación empresarial en liderazgo y autoconocimiento, y también acompaño procesos de coaching individual.",
  },
  {
    q: "¿Dónde puedo empezar si no te conozco?",
    a: 'El punto de entrada más natural es el libro "El Poder es Tú-Yo", disponible en la sección de libros de este sitio.',
  },
];

export default function SobreMi() {
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
    <div className="mx-auto max-w-3xl px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">
        Sobre mí
      </p>
      <h1 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">
        {site.name}
      </h1>

      <div className="mt-10 space-y-6 text-foreground-muted">
        <p>{background.summary}</p>
        <p>
          Durante {background.years} trabajé en marketing y desarrollo de negocio
          para compañías como Pfizer y Aspen, liderando lanzamientos regionales,
          planeación estratégica y equipos comerciales en la región Andina. Desde
          2016 combiné ese camino corporativo con la formación en liderazgo y
          autoconocimiento, hasta dedicarme por completo a acompañar a personas y
          equipos en procesos de transformación real.
        </p>
        <p>
          Hoy guío ese proceso a través del {method.name}, y lo comparto en
          talleres, conferencias, sesiones de coaching y en mi libro{" "}
          <em className="font-serif not-italic">&ldquo;El Poder es Tú-Yo&rdquo;</em>.
        </p>
      </div>

      <div className="mt-14">
        <h2 className="font-display text-2xl tracking-tight">Formación</h2>
        <ul className="mt-4 space-y-2 text-sm text-foreground-muted">
          <li>— Especialista en Marketing Estratégico, CESA (2015)</li>
          <li>
            — Profesional en Negocios Internacionales, Politécnico Grancolombiano
            (2006–2011)
          </li>
          {background.certifications.map((c) => (
            <li key={c}>— {c}</li>
          ))}
        </ul>
      </div>

      <div className="mt-14">
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
    </div>
  );
}
