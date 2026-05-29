import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "manga-gastrica",
    title: "Manga Gástrica",
    shortDescription:
      "Procedimiento laparoscópico que reduce el volumen del estómago para controlar el apetito y promover la pérdida de peso sostenida.",
    description:
      "La manga gástrica (gastrectomía vertical) es uno de los procedimientos bariátricos más realizados a nivel mundial. Consiste en reducir aproximadamente el 80% del estómago, creando un tubo o manga que limita la cantidad de alimento que puede ingerir el paciente. Se realiza por vía laparoscópica, lo que permite una recuperación más rápida, menor dolor postoperatorio y cicatrices mínimas. Este procedimiento no solo restringe el volumen gástrico, sino que también reduce la producción de grelina, la hormona del hambre, facilitando el control del apetito.",
    benefits: [
      "Pérdida de peso significativa y sostenida",
      "Procedimiento laparoscópico con recuperación rápida",
      "Reducción de comorbilidades (diabetes, hipertensión)",
      "Mejora de la calidad de vida y autoestima",
      "Menor tiempo quirúrgico comparado con bypass",
    ],
    faqs: [
      {
        question: "¿Cuánto peso se puede perder con manga gástrica?",
        answer:
          "En promedio, los pacientes pierden entre el 60% y 70% del exceso de peso en los primeros 12 a 18 meses, dependiendo del compromiso con hábitos alimenticios y actividad física.",
      },
      {
        question: "¿Cuánto dura la cirugía?",
        answer:
          "El procedimiento dura entre 1 y 2 horas y generalmente requiere 1 a 2 días de hospitalización.",
      },
      {
        question: "¿Es reversible la manga gástrica?",
        answer:
          "No es un procedimiento reversible. Por eso es fundamental una evaluación médica completa antes de la cirugía.",
      },
    ],
    image: "/images/services/manga-gastrica.jpg",
    icon: "Scissors",
  },
  {
    slug: "bypass-gastrico",
    title: "Bypass Gástrico",
    shortDescription:
      "Combina restricción gástrica y malabsorción moderada para lograr una pérdida de peso efectiva en casos de obesidad severa.",
    description:
      "El bypass gástrico en Y de Roux es considerado el estándar de oro en cirugía bariátrica. Consiste en crear una pequeña bolsa gástrica y conectarla directamente al intestino delgado, saltando una porción del estómago y duodeno. Esto genera dos mecanismos de acción: restricción (menor capacidad gástrica) y malabsorción moderada. Es especialmente indicado en pacientes con diabetes tipo 2 y obesidad mórbida, ya que muchos experimentan remisión de la diabetes poco después del procedimiento.",
    benefits: [
      "Mayor pérdida de peso en obesidad severa",
      "Remisión de diabetes tipo 2 en muchos casos",
      "Efecto metabólico comprobado",
      "Resultados a largo plazo documentados",
      "Mejora de síndrome metabólico",
    ],
    faqs: [
      {
        question: "¿En qué casos se recomienda el bypass?",
        answer:
          "Se recomienda principalmente en pacientes con IMC mayor a 40, o mayor a 35 con comorbilidades como diabetes, hipertensión o apnea del sueño.",
      },
      {
        question: "¿Requiere suplementos de por vida?",
        answer:
          "Sí, debido a la malabsorción, es necesario tomar suplementos vitamínicos y minerales de forma permanente bajo supervisión médica.",
      },
      {
        question: "¿Cuál es el tiempo de recuperación?",
        answer:
          "La mayoría de pacientes retoman actividades ligeras en 2 semanas y actividades completas en 4 a 6 semanas.",
      },
    ],
    image: "/images/services/bypass-gastrico.jpg",
    icon: "Activity",
  },
  {
    slug: "balon-gastrico",
    title: "Balón Gástrico",
    shortDescription:
      "Opción no quirúrgica temporal que ocupa espacio en el estómago para ayudar a iniciar el proceso de pérdida de peso.",
    description:
      "El balón gástrico es un dispositivo médico que se coloca dentro del estómago mediante endoscopia, sin necesidad de cirugía. Una vez inflado, ocupa espacio en el estómago generando una sensación de saciedad temprana. Es una excelente opción para pacientes que desean perder peso de forma inicial antes de considerar cirugía, o para quienes no son candidatos quirúrgicos. El balón permanece entre 6 y 12 meses, durante los cuales el paciente recibe acompañamiento nutricional y de cambio de hábitos.",
    benefits: [
      "Procedimiento ambulatorio sin cirugía",
      "Recuperación inmediata",
      "Ideal como primer paso hacia cirugía bariátrica",
      "Acompañamiento nutricional incluido",
      "Menor riesgo comparado con cirugía",
    ],
    faqs: [
      {
        question: "¿Cuánto peso se pierde con el balón?",
        answer:
          "En promedio, los pacientes pierden entre 10% y 15% de su peso corporal total durante los 6 a 12 meses que permanece el balón.",
      },
      {
        question: "¿El procedimiento duele?",
        answer:
          "Se realiza bajo sedación. Puede haber náuseas los primeros días que se controlan con medicación.",
      },
      {
        question: "¿Qué pasa cuando se retira el balón?",
        answer:
          "Es fundamental mantener los hábitos adquiridos. Muchos pacientes continúan hacia cirugía bariátrica si lo requieren.",
      },
    ],
    image: "/images/services/balon-gastrico.jpg",
    icon: "Circle",
  },
  {
    slug: "tratamiento-obesidad",
    title: "Tratamiento Integral de la Obesidad",
    shortDescription:
      "Programa multidisciplinario que combina evaluación médica, nutrición, psicología y seguimiento postoperatorio.",
    description:
      "El tratamiento integral de la obesidad va más allá de un procedimiento quirúrgico. Nuestro programa incluye evaluación médica completa, estudios preoperatorios, valoración nutricional, apoyo psicológico y seguimiento a largo plazo. Entendemos que la obesidad es una enfermedad crónica y multifactorial, por lo que abordamos cada caso de forma personalizada, definiendo el plan terapéutico más adecuado para cada paciente, ya sea manejo médico, balón gástrico o cirugía bariátrica.",
    benefits: [
      "Enfoque multidisciplinario completo",
      "Plan personalizado según cada paciente",
      "Seguimiento a largo plazo",
      "Educación en hábitos de vida saludable",
      "Prevención de recidiva ponderal",
    ],
    faqs: [
      {
        question: "¿Quién es candidato para el programa?",
        answer:
          "Pacientes con IMC mayor a 30 con comorbilidades, o IMC mayor a 35 sin comorbilidades, que no han logrado pérdida de peso sostenida con tratamiento convencional.",
      },
      {
        question: "¿Incluye seguimiento postoperatorio?",
        answer:
          "Sí, el programa incluye controles médicos, nutricionales y de laboratorio de forma periódica.",
      },
      {
        question: "¿Cuánto dura la evaluación inicial?",
        answer:
          "La evaluación completa generalmente toma entre 2 y 4 semanas, incluyendo estudios y valoraciones especializadas.",
      },
    ],
    image: "/images/services/tratamiento-obesidad.jpg",
    icon: "HeartPulse",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
