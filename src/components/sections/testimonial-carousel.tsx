"use client";

import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import type { Testimonial } from "@/types";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      className="w-full"
      aria-label="Testimonios de pacientes"
    >
      <CarouselContent className="-ml-4">
        {testimonials.map((testimonial) => (
          <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
            <Card className="h-full border-border/60">
              <CardContent className="flex h-full flex-col p-6">
                <Quote className="h-8 w-8 text-primary/30" aria-hidden />
                <p className="mt-4 flex-1 text-muted-foreground leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-1" aria-label={`${testimonial.rating} de 5 estrellas`}>
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden />
                  ))}
                </div>
                <div className="mt-4 border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.city} · {testimonial.procedure}
                  </p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  );
}
