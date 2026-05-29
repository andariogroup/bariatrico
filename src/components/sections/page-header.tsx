import { FadeIn } from "@/components/motion/fade-in";

interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <FadeIn>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              {description}
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
