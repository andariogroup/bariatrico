"use server";

import { headers } from "next/headers";
import { leadSchema } from "@/lib/validations";
import { createServerClient } from "@/lib/supabase/server";
import { checkRateLimit } from "@/lib/rate-limit";
import type { ActionResult } from "@/types";

export async function submitLead(
  formData: FormData
): Promise<ActionResult> {
  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (!checkRateLimit(`lead:${ip}`)) {
    return {
      success: false,
      error: "Demasiados intentos. Por favor espera un momento.",
    };
  }

  const raw = {
    nombre: formData.get("nombre")?.toString().trim() ?? "",
    telefono: formData.get("telefono")?.toString().trim() ?? "",
    email: formData.get("email")?.toString().trim() ?? "",
    ciudad: formData.get("ciudad")?.toString().trim() ?? "",
    interes: formData.get("interes")?.toString().trim() ?? "",
  };

  const parsed = leadSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.issues[0]?.message ?? "Datos inválidos",
    };
  }

  const supabase = createServerClient();

  if (!supabase) {
    console.info("[Lead captured - Supabase not configured]", parsed.data);
    return { success: true };
  }

  const { error } = await supabase.from("leads").insert({
    nombre: parsed.data.nombre,
    telefono: parsed.data.telefono,
    email: parsed.data.email,
    ciudad: parsed.data.ciudad,
    interes: parsed.data.interes,
  });

  if (error) {
    console.error("Supabase lead error:", error);
    return {
      success: false,
      error: "No pudimos procesar tu solicitud. Intenta de nuevo.",
    };
  }

  return { success: true };
}
