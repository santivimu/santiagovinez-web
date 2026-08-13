import { site, channels } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-lg tracking-wide">{site.shortName.toUpperCase()}</p>
          <p className="mt-2 max-w-sm text-sm text-foreground-muted">{site.tagline}</p>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
          {channels.map((c) =>
            c.url ? (
              <a
                key={c.label}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-muted hover:text-accent"
              >
                {c.label}
              </a>
            ) : (
              <span key={c.label} className="text-foreground-muted/50">
                {c.label}
              </span>
            )
          )}
        </div>
      </div>
      <div className="border-t border-border/60 px-6 py-4 text-center text-xs text-foreground-muted/70">
        © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
