"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "No se pudo enviar el mensaje.");
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "No se pudo enviar el mensaje.");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-accent/60 bg-background-alt/40 p-8">
        <p className="font-display text-xl text-accent">¡Mensaje enviado!</p>
        <p className="mt-2 text-sm text-foreground-muted">
          Gracias por escribir. Te responderé personalmente muy pronto.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
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

      {status === "error" && (
        <p className="text-sm text-red-400">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition hover:bg-accent-soft disabled:opacity-60"
      >
        {status === "sending" ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}
