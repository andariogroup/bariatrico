import { PageHeader } from "@/components/sections/page-header";
import { AppointmentWidget } from "@/components/sections/appointment-widget";
import { FadeIn } from "@/components/motion/fade-in";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata = createMetadata({
  title: "Agendar Cita | Consulta de Cirugía Bariátrica",
  description:
    "Agenda tu consulta de valoración de forma rápida y segura. Primera consulta sin compromiso.",
  path: "/agendamiento",
});

export default function AgendamientoPage() {
  return (
    <>
      <PageHeader
        title="Agendar Consulta"
        description="Selecciona el horario que mejor se adapte a tu disponibilidad. Te confirmaremos por email o WhatsApp."
      />
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <AppointmentWidget
              url={siteConfig.calendarUrl}
              title="Calendario de citas"
            />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
