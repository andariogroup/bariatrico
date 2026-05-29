import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { getWhatsAppUrl } from "@/lib/site-config";
import { images } from "@/utils/images";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  showStats?: boolean;
}

const stats = [
  { icon: Users, value: "2,000+", label: "Pacientes atendidos" },
  { icon: Award, value: "15+", label: "Años de experiencia" },
  { icon: Shield, value: "98%", label: "Satisfacción" },
];

export function HeroSection({
  title = "Transforma tu vida con cirugía bariátrica segura y personalizada",
  subtitle = "Especialista en manga gástrica, bypass gástrico y tratamiento integral de la obesidad. Recupera tu salud con un equipo médico de excelencia.",
  showStats = true,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Cirugía Bariátrica de Excelencia
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {subtitle}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                render={<Link href="/agendamiento" />}
                nativeButton={false}
                size="lg"
                className="gap-2"
              >
                Agendar Consulta Gratuita
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                render={<a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" />}
                nativeButton={false}
                variant="outline"
                size="lg"
              >
                Escríbenos por WhatsApp
              </Button>
            </div>
            {showStats && (
              <div className="mt-12 grid grid-cols-3 gap-4 border-t border-border pt-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center sm:text-left">
                    <stat.icon className="mx-auto h-5 w-5 text-primary sm:mx-0" aria-hidden />
                    <p className="mt-2 text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground sm:text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}
          </FadeIn>

          <FadeIn delay={0.2} direction="right">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl shadow-primary/10">
              <Image
                src={images.hero}
                alt="Cirujano bariátrico especialista"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
