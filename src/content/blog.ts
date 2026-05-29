import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "que-es-la-manga-gastrica",
    title: "¿Qué es la manga gástrica y quién es candidato?",
    excerpt:
      "Conoce todo sobre este procedimiento bariátrico: indicaciones, beneficios, riesgos y proceso de recuperación.",
    content: `La manga gástrica es uno de los procedimientos bariátricos más demandados en el mundo. En este artículo explicamos de forma clara qué implica, quiénes son candidatos ideales y qué esperar durante el proceso.

## ¿Qué es la manga gástrica?

Es un procedimiento quirúrgico laparoscópico donde se retira aproximadamente el 80% del estómago, dejando una estructura tubular o en forma de manga. Esto reduce significativamente la capacidad gástrica.

## ¿Quién es candidato?

- IMC mayor a 35
- IMC mayor a 30 con comorbilidades (diabetes, hipertensión, apnea)
- Pacientes que no han logrado pérdida de peso con tratamiento médico

## Beneficios principales

- Pérdida de peso del 60-70% del exceso de peso
- Mejora o remisión de diabetes e hipertensión
- Recuperación rápida por técnica laparoscópica

## Conclusión

La manga gástrica es una excelente opción para muchos pacientes, pero requiere evaluación médica personalizada. Agenda tu consulta para determinar si eres candidato.`,
    image: "/images/blog/manga-gastrica.jpg",
    category: "Procedimientos",
    createdAt: "2025-11-15",
    author: "Dr. José Acosta Maestre",
  },
  {
    id: "2",
    slug: "alimentacion-post-cirugia-bariatrica",
    title: "Alimentación después de la cirugía bariátrica: guía completa",
    excerpt:
      "Las fases alimentarias postoperatorias son clave para el éxito. Te explicamos qué comer en cada etapa.",
    content: `La alimentación postoperatoria es fundamental para el éxito de cualquier procedimiento bariátrico. Seguir las fases correctamente minimiza complicaciones y maximiza la pérdida de peso.

## Fase 1: Líquidos claros (semana 1-2)

Agua, caldos desgrasados, gelatinas sin azúcar. Sorbitos pequeños y frecuentes.

## Fase 2: Líquidos completos (semana 2-4)

Batidos de proteína, sopas licuadas, yogur sin azúcar.

## Fase 3: Textura puré (semana 4-6)

Alimentos triturados: pollo, pescado, verduras cocidas.

## Fase 4: Textura blanda (semana 6-8)

Alimentos tiernos en porciones pequeñas. Masticar bien.

## Fase 5: Alimentación regular

Porciones controladas, alta en proteína, baja en carbohidratos simples.

## Consejos clave

- Priorizar proteína en cada comida
- Evitar líquidos 30 min antes y después de comer
- Tomar suplementos según indicación médica
- Hidratarse adecuadamente`,
    image: "/images/blog/alimentacion.jpg",
    category: "Nutrición",
    createdAt: "2025-10-20",
    author: "Dr. José Acosta Maestre",
  },
  {
    id: "3",
    slug: "mitos-cirugia-bariatrica",
    title: "5 mitos sobre la cirugía bariátrica que debes conocer",
    excerpt:
      "Desmentimos los mitos más comunes sobre la cirugía de obesidad con evidencia médica.",
    content: `Existen muchos mitos alrededor de la cirugía bariátrica que generan miedo innecesario. Aquí desmentimos los más frecuentes.

## Mito 1: "Es la solución fácil"

**Realidad:** La cirugía es una herramienta poderosa, pero requiere cambio permanente de hábitos, suplementación y seguimiento médico.

## Mito 2: "Siempre recuperas el peso"

**Realidad:** Con seguimiento adecuado, más del 80% de pacientes mantienen pérdida significativa a 5 años.

## Mito 3: "Es muy peligrosa"

**Realidad:** La cirugía bariátrica laparoscópica tiene menor riesgo que muchas cirugías comunes, con tasas de mortalidad menores al 0.2%.

## Mito 4: "No puedes tener hijos después"

**Realidad:** Muchas pacientes logran embarazos saludables post cirugía, con mejor control metabólico.

## Mito 5: "Solo es estética"

**Realidad:** Es un tratamiento médico para una enfermedad crónica que mejora diabetes, hipertensión, apnea y esperanza de vida.`,
    image: "/images/blog/mitos.jpg",
    category: "Educación",
    createdAt: "2025-09-05",
    author: "Dr. José Acosta Maestre",
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getBlogCategories(): string[] {
  return [...new Set(blogPosts.map((p) => p.category))];
}
