import { PageHeader } from "@/components/sections/page-header";
import { ServiceCard } from "@/components/sections/service-card";
import { CTASection } from "@/components/sections/cta-section";
import { createMetadata } from "@/lib/seo";
import { services } from "@/content/services";

export const metadata = createMetadata({
  title: "Servicios de Cirugía Bariátrica",
  description:
    "Manga gástrica, bypass gástrico, balón gástrico y tratamiento integral de la obesidad. Procedimientos seguros con resultados comprobados.",
  path: "/servicios",
});

export default function ServiciosPage() {
  return (
    <>
      <PageHeader
        title="Servicios Médicos"
        description="Procedimientos bariátricos de vanguardia adaptados a las necesidades de cada paciente."
      />
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
