import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { ContactForm } from "@/components/forms/contact-form";
import { FadeIn } from "@/components/motion/fade-in";
import { createMetadata } from "@/lib/seo";
import { siteConfig, getWhatsAppUrl } from "@/lib/site-config";
import { Button } from "@/components/ui/button";

export const metadata = createMetadata({
  title: "Contacto | Consultorio de Cirugía Bariátrica",
  description:
    "Contáctanos para agendar tu consulta. Formulario, mapa, horarios y WhatsApp directo.",
  path: "/contacto",
});

export default function ContactoPage() {
  return (
    <>
      <PageHeader
        title="Contacto"
        description="Estamos aquí para responder tus preguntas y ayudarte en tu camino hacia una vida más saludable."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn>
              <div className="rounded-2xl border border-border/60 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-xl font-bold">Envíanos un mensaje</h2>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 className="text-xl font-bold">Información del consultorio</h2>
              <ul className="mt-6 space-y-5">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <div>
                    <p className="font-medium">Dirección</p>
                    <p className="text-sm text-muted-foreground">{siteConfig.address}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                      className="text-sm text-primary hover:underline"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-sm text-primary hover:underline"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <div>
                    <p className="font-medium">Horarios</p>
                    <p className="text-sm text-muted-foreground">{siteConfig.hours}</p>
                  </div>
                </li>
              </ul>

              <Button
                render={<a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" />}
                nativeButton={false}
                className="mt-6 w-full sm:w-auto"
              >
                Escribir por WhatsApp
              </Button>

              {siteConfig.mapsEmbedUrl && (
                <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-sm">
                  <iframe
                    src={siteConfig.mapsEmbedUrl}
                    title="Ubicación del consultorio"
                    className="h-64 w-full border-0 sm:h-80"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              )}
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
