"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, type ContactInput } from "@/lib/validations";
import { submitContact } from "@/app/actions/contact";

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [serverError, setServerError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactInput) => {
    setServerError(null);
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    startTransition(async () => {
      const result = await submitContact(formData);
      if (result.success) {
        setSuccess(true);
        reset();
      } else {
        setServerError(result.error);
      }
    });
  };

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle2 className="h-12 w-12 text-green-600" aria-hidden />
        <h3 className="mt-4 text-lg font-semibold text-green-900">
          ¡Mensaje enviado!
        </h3>
        <p className="mt-2 text-sm text-green-700">
          Te responderemos lo antes posible.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
      noValidate
      aria-label="Formulario de contacto"
    >
      <div className="space-y-2">
        <Label htmlFor="contact-nombre">Nombre completo *</Label>
        <Input
          id="contact-nombre"
          {...register("nombre")}
          placeholder="Tu nombre"
          aria-invalid={!!errors.nombre}
        />
        {errors.nombre && (
          <p className="text-sm text-destructive" role="alert">
            {errors.nombre.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-telefono">Teléfono *</Label>
        <Input
          id="contact-telefono"
          type="tel"
          {...register("telefono")}
          placeholder="+57 300 000 0000"
          aria-invalid={!!errors.telefono}
        />
        {errors.telefono && (
          <p className="text-sm text-destructive" role="alert">
            {errors.telefono.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-mensaje">Mensaje *</Label>
        <Textarea
          id="contact-mensaje"
          {...register("mensaje")}
          placeholder="Cuéntanos cómo podemos ayudarte..."
          rows={5}
          aria-invalid={!!errors.mensaje}
        />
        {errors.mensaje && (
          <p className="text-sm text-destructive" role="alert">
            {errors.mensaje.message}
          </p>
        )}
      </div>

      {serverError && (
        <p className="text-sm text-destructive" role="alert">
          {serverError}
        </p>
      )}

      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden />
            Enviando...
          </>
        ) : (
          "Enviar mensaje"
        )}
      </Button>
    </form>
  );
}
