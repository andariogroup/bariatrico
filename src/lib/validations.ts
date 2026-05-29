import { z } from "zod";

const phoneRegex = /^[\d\s+\-()]{7,20}$/;

export const leadSchema = z.object({
  nombre: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "Nombre demasiado largo"),
  telefono: z
    .string()
    .regex(phoneRegex, "Ingrese un teléfono válido")
    .min(7, "Teléfono inválido"),
  email: z.string().email("Ingrese un email válido"),
  ciudad: z.string().min(2, "Ingrese su ciudad").max(100),
  interes: z.string().min(1, "Seleccione un procedimiento de interés"),
});

export const contactSchema = z.object({
  nombre: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100),
  telefono: z
    .string()
    .regex(phoneRegex, "Ingrese un teléfono válido")
    .min(7, "Teléfono inválido"),
  mensaje: z
    .string()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(2000, "Mensaje demasiado largo"),
});

export type LeadInput = z.infer<typeof leadSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
