"use server";

import { headers } from "next/headers";
import { contactSchema } from "@/lib/validations";
import { createServerClient } from "@/lib/supabase/server";
import { checkRateLimit } from "@/lib/rate-limit";
import type { ActionResult } from "@/types";

export async function submitContact(
  formData: FormData
): Promise<ActionResult> {
  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (!checkRateLimit(`contact:${ip}`)) {
    return {
      success: false,
      error: "Demasiados intentos. Por favor espera un momento.",
    };
  }

  const raw = {
    nombre: formData.get("nombre")?.toString().trim() ?? "",
    telefono: formData.get("telefono")?.toString().trim() ?? "",
    mensaje: formData.get("mensaje")?.toString().trim() ?? "",
  };

  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.issues[0]?.message ?? "Datos inválidos",
    };
  }

  const supabase = createServerClient();

  if (!supabase) {
    console.info("[Contact captured - Supabase not configured]", parsed.data);
    return { success: true };
  }

  const { error } = await supabase.from("contactos").insert({
    nombre: parsed.data.nombre,
    telefono: parsed.data.telefono,
    mensaje: parsed.data.mensaje,
  });

  if (error) {
    console.error("Supabase contact error:", error);
    return {
      success: false,
      error: "No pudimos enviar tu mensaje. Intenta de nuevo.",
    };
  }

  return { success: true };
}
