import Link from "next/link";
import { ArrowRight, Scissors, Activity, Circle, HeartPulse } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";
import type { Service } from "@/types";

const iconMap = {
  Scissors,
  Activity,
  Circle,
  HeartPulse,
} as const;

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Scissors;

  return (
    <FadeIn delay={index * 0.1}>
      <Card className="group h-full border-border/60 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
        <CardHeader>
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <Icon className="h-6 w-6" aria-hidden />
          </div>
          <CardTitle className="text-xl">{service.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            {service.shortDescription}
          </p>
          <Link
            href={`/servicios/${service.slug}`}
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
          >
            Conocer más
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </CardContent>
      </Card>
    </FadeIn>
  );
}
