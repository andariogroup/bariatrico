"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";
import type { BeforeAfter } from "@/types";

interface BeforeAfterGalleryProps {
  cases: BeforeAfter[];
}

export function BeforeAfterGallery({ cases }: BeforeAfterGalleryProps) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {cases.map((item, index) => (
        <FadeIn key={item.id} delay={index * 0.1}>
          <article className="overflow-hidden rounded-2xl border border-border/60 bg-white shadow-sm">
            <div className="grid grid-cols-2 gap-0.5 bg-muted">
              <div className="relative aspect-[3/4]">
                <Image
                  src={item.beforeImage}
                  alt={`Antes — ${item.title}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 200px"
                />
                <span className="absolute bottom-2 left-2 rounded-md bg-black/60 px-2 py-0.5 text-xs text-white">
                  Antes
                </span>
              </div>
              <div className="relative aspect-[3/4]">
                <Image
                  src={item.afterImage}
                  alt={`Después — ${item.title}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 200px"
                />
                <span className="absolute bottom-2 left-2 rounded-md bg-primary px-2 py-0.5 text-xs text-white">
                  Después
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
            </div>
          </article>
        </FadeIn>
      ))}
    </div>
  );
}
