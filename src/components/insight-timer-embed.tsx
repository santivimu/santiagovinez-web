import { insightTimerEmbedSrc } from "@/lib/site-data";

export function InsightTimerEmbed() {
  return (
    <iframe
      style={{ borderRadius: 16 }}
      width="100%"
      height="455"
      title="Insight Timer Embed: Santiago Viñez Muñoz"
      frameBorder={0}
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      src={insightTimerEmbedSrc}
    />
  );
}
