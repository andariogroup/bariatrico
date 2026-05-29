import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { CTASection } from "@/components/sections/cta-section";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/seo";
import { services, getServiceBySlug } from "@/content/services";
import { images } from "@/utils/images";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return createMetadata({
    title: `${service.title} | Cirugía Bariátrica`,
    description: service.shortDescription,
    path: `/servicios/${slug}`,
    image: images.services[slug as keyof typeof images.services],
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const serviceImage =
    images.services[slug as keyof typeof images.services] ?? images.hero;

  return (
    <>
      <PageHeader title={service.title} description={service.shortDescription} />

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="relative aspect-[21/9] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={serviceImage}
                alt={service.title}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <FadeIn className="lg:col-span-2">
              <h2 className="text-2xl font-bold">Descripción del procedimiento</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              <h3 className="mt-10 text-xl font-bold">Beneficios</h3>
              <ul className="mt-4 space-y-3">
                {service.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 rounded-lg border border-border/60 bg-muted/20 p-4 text-sm"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                      ✓
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="sticky top-24 rounded-2xl border border-border/60 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold">¿Interesado en este procedimiento?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Agenda una consulta de valoración sin compromiso.
                </p>
                <Button
                  render={<Link href="/agendamiento" />}
                  nativeButton={false}
                  className="mt-4 w-full"
                >
                  Agendar Consulta
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  render={<Link href="/contacto" />}
                  nativeButton={false}
                  variant="outline"
                  className="mt-2 w-full"
                >
                  Contactar
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl font-bold text-center mb-8">
              Preguntas Frecuentes
            </h2>
            <FAQAccordion faqs={service.faqs} />
          </FadeIn>
        </div>
      </section>

      <CTASection
        title={`¿Listo para conocer más sobre ${service.title}?`}
        description="Agenda tu consulta y recibe una evaluación personalizada de tu caso."
      />
    </>
  );
}
