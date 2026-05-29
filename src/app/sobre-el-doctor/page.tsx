import Image from "next/image";
import { Award, GraduationCap, Trophy } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { CTASection } from "@/components/sections/cta-section";
import { FadeIn } from "@/components/motion/fade-in";
import { createMetadata } from "@/lib/seo";
import { physicianSchema } from "@/lib/seo";
import { doctorInfo } from "@/content/doctor";
import { images } from "@/utils/images";

export const metadata = createMetadata({
  title: `Sobre el Doctor | ${doctorInfo.name}`,
  description: doctorInfo.subtitle,
  path: "/sobre-el-doctor",
});

export default function SobreElDoctorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema()) }}
      />
      <PageHeader title={doctorInfo.name} description={doctorInfo.subtitle} />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <FadeIn>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src={images.doctorProfile}
                  alt={doctorInfo.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-2xl font-bold">Biografía Profesional</h2>
              <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed whitespace-pre-line">
                {doctorInfo.bio}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center">
            <h2 className="text-2xl font-bold">Conoce al Doctor</h2>
            <p className="mt-2 text-muted-foreground">
              Mensaje personal del Dr. Martínez para sus pacientes
            </p>
          </FadeIn>
          <FadeIn delay={0.2} className="mt-8">
            <div className="aspect-video overflow-hidden rounded-2xl shadow-lg">
              <iframe
                src={doctorInfo.videoUrl}
                title="Video presentación del doctor"
                className="h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Experiencia, certificaciones, logros */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <FadeIn>
              <div className="flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-primary" aria-hidden />
                <h2 className="text-xl font-bold">Experiencia</h2>
              </div>
              <ul className="mt-6 space-y-4">
                {doctorInfo.experience.map((exp) => (
                  <li key={exp.year} className="border-l-2 border-primary/30 pl-4">
                    <p className="text-sm font-medium text-primary">{exp.year}</p>
                    <p className="font-semibold">{exp.role}</p>
                    <p className="text-sm text-muted-foreground">{exp.place}</p>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 text-primary" aria-hidden />
                <h2 className="text-xl font-bold">Certificaciones</h2>
              </div>
              <ul className="mt-6 space-y-3">
                {doctorInfo.certifications.map((cert) => (
                  <li key={cert} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                    {cert}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex items-center gap-3">
                <Trophy className="h-6 w-6 text-primary" aria-hidden />
                <h2 className="text-xl font-bold">Logros</h2>
              </div>
              <ul className="mt-6 space-y-3">
                {doctorInfo.achievements.map((achievement) => (
                  <li key={achievement} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                    {achievement}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
