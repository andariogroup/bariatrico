import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { getWhatsAppUrl } from "@/lib/site-config";

interface CTASectionProps {
  title?: string;
  description?: string;
}

export function CTASection({
  title = "¿Listo para dar el primer paso hacia una vida más saludable?",
  description = "Agenda tu consulta de valoración sin compromiso. Evaluamos tu caso de forma personalizada y te orientamos sobre el mejor tratamiento.",
}: CTASectionProps) {
  return (
    <section className="bg-primary py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">{description}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              render={<Link href="/agendamiento" />}
              nativeButton={false}
              size="lg"
              variant="secondary"
              className="gap-2 bg-white text-primary hover:bg-white/90"
            >
              Agendar Consulta
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              render={<a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="border-white/30 bg-transparent text-white hover:bg-white/10"
            >
              WhatsApp
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
