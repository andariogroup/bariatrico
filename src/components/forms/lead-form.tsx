"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { leadSchema, type LeadInput } from "@/lib/validations";
import { submitLead } from "@/app/actions/leads";
import { services } from "@/content/services";

export function LeadForm() {
  const [isPending, startTransition] = useTransition();
  const [serverError, setServerError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      nombre: "",
      telefono: "",
      email: "",
      ciudad: "",
      interes: "",
    },
  });

  const onSubmit = (data: LeadInput) => {
    setServerError(null);
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    startTransition(async () => {
      const result = await submitLead(formData);
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
          ¡Solicitud enviada con éxito!
        </h3>
        <p className="mt-2 text-sm text-green-700">
          Nos comunicaremos contigo en las próximas 24 horas.
        </p>
        <Button
          variant="outline"
          className="mt-4"
          onClick={() => setSuccess(false)}
        >
          Enviar otra solicitud
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
      noValidate
      aria-label="Formulario de solicitud de consulta"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="nombre">Nombre completo *</Label>
          <Input
            id="nombre"
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
          <Label htmlFor="telefono">Teléfono *</Label>
          <Input
            id="telefono"
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
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="tu@email.com"
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="text-sm text-destructive" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="ciudad">Ciudad *</Label>
          <Input
            id="ciudad"
            {...register("ciudad")}
            placeholder="Tu ciudad"
            aria-invalid={!!errors.ciudad}
          />
          {errors.ciudad && (
            <p className="text-sm text-destructive" role="alert">
              {errors.ciudad.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="interes">Procedimiento de interés *</Label>
        <Select onValueChange={(v) => setValue("interes", v as string, { shouldValidate: true })}>
          <SelectTrigger id="interes" aria-invalid={!!errors.interes}>
            <SelectValue placeholder="Selecciona un procedimiento" />
          </SelectTrigger>
          <SelectContent>
            {services.map((s) => (
              <SelectItem key={s.slug} value={s.title}>
                {s.title}
              </SelectItem>
            ))}
            <SelectItem value="Consulta general">Consulta general</SelectItem>
          </SelectContent>
        </Select>
        {errors.interes && (
          <p className="text-sm text-destructive" role="alert">
            {errors.interes.message}
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
          "Solicitar consulta gratuita"
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Al enviar aceptas que nos contactemos contigo. Tus datos están protegidos.
      </p>
    </form>
  );
}
