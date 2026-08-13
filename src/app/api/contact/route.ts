import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site-data";

export async function POST(request: Request) {
  const { nombre, email, tipo, mensaje } = await request.json();

  if (!nombre || !email || !mensaje) {
    return NextResponse.json({ error: "Faltan campos requeridos." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "El envío de correo aún no está configurado." },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: `Sitio web <onboarding@resend.dev>`,
      to: site.email,
      replyTo: email,
      subject: `Nuevo contacto: ${tipo ?? "Consulta general"} — ${nombre}`,
      html: `
        <h2>Nuevo mensaje desde santiagovinez.com</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Tipo de consulta:</strong> ${escapeHtml(tipo ?? "No especificado")}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${escapeHtml(mensaje).replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "No se pudo enviar el mensaje." }, { status: 500 });
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
