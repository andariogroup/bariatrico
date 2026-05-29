import Link from "next/link";
import { ArrowRight, CheckCircle2, Heart, Scale, Sparkles } from "lucide-react";
import { HeroSection } from "@/components/sections/hero-section";
import { CTASection } from "@/components/sections/cta-section";
import { ServiceCard } from "@/components/sections/service-card";
import { TestimonialCarousel } from "@/components/sections/testimonial-carousel";
import { BeforeAfterGallery } from "@/components/sections/before-after-gallery";
import { LeadForm } from "@/components/forms/lead-form";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { services } from "@/content/services";
import { testimonials } from "@/content/testimonials";
import { beforeAfterCases } from "@/content/before-after";
import { images } from "@/utils/images";

const benefits = [
  {
    icon: Heart,
    title: "Mejora tu salud",
    description: "Reduce diabetes, hipertensión y otras comorbilidades asociadas a la obesidad.",
  },
  {
    icon: Scale,
    title: "Pérdida de peso sostenida",
    description: "Resultados comprobados con seguimiento médico y nutricional personalizado.",
  },
  {
    icon: Sparkles,
    title: "Calidad de vida",
    description: "Recupera movilidad, energía y confianza para disfrutar plenamente tu vida.",
  },
];

const galleryCases = beforeAfterCases.map((c) => ({
  ...c,
  beforeImage: images.beforeAfter.before,
  afterImage: images.beforeAfter.after,
}));

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Servicios destacados */}
      <section className="py-16 sm:py-24" aria-labelledby="servicios-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center">
            <h2 id="servicios-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
              Nuestros Servicios
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Procedimientos bariátricos de vanguardia con técnicas mínimamente invasivas y resultados comprobados.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button
              render={<Link href="/servicios" />}
              nativeButton={false}
              variant="outline"
            >
              Ver todos los servicios
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="bg-muted/30 py-16 sm:py-24" aria-labelledby="beneficios-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center">
            <h2 id="beneficios-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
              ¿Por qué elegirnos?
            </h2>
          </FadeIn>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {benefits.map((benefit, i) => (
              <FadeIn key={benefit.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-border/60 bg-white p-8 text-center shadow-sm">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <benefit.icon className="h-7 w-7" aria-hidden />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{benefit.title}</h3>
                  <p className="mt-2 text-muted-foreground">{benefit.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Antes y después */}
      <section className="py-16 sm:py-24" aria-labelledby="resultados-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center">
            <h2 id="resultados-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
              Resultados Reales
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Historias de transformación de nuestros pacientes. Resultados individuales pueden variar.
            </p>
          </FadeIn>
          <div className="mt-12">
            <BeforeAfterGallery cases={galleryCases} />
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="bg-muted/30 py-16 sm:py-24" aria-labelledby="testimonios-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center">
            <h2 id="testimonios-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
              Lo que dicen nuestros pacientes
            </h2>
          </FadeIn>
          <div className="mt-12">
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </div>
      </section>

      {/* Formulario leads */}
      <section className="py-16 sm:py-24" aria-labelledby="consulta-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <h2 id="consulta-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
                Solicita tu consulta gratuita
              </h2>
              <p className="mt-4 text-muted-foreground">
                Completa el formulario y nuestro equipo se comunicará contigo en menos de 24 horas para agendar tu valoración.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Evaluación médica personalizada",
                  "Sin compromiso",
                  "Respuesta en 24 horas",
                  "Atención confidencial",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="rounded-2xl border border-border/60 bg-white p-6 shadow-sm sm:p-8">
                <LeadForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
