/** Placeholders médicos vía Unsplash hasta reemplazar con fotos reales */
const baseParams = "&auto=format&fit=crop&q=80";

export const images = {
  hero:
    "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?w=1200" +
    baseParams,
  doctor:
    "https://images.unsplash.com/photo-1535916707207-35f97e715e1b?w=1200" +
    baseParams,
  doctorProfile:
    "https://images.unsplash.com/photo-1535916707207-35f97e715e1b?w=800" +
    baseParams,
  services: {
    "manga-gastrica":
      "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?w=1200" +
      baseParams,
    "bypass-gastrico":
      "https://images.unsplash.com/photo-1579684385127-1ef15d6c31b1?w=1200" +
      baseParams,
    "balon-gastrico":
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200" +
      baseParams,
    "tratamiento-obesidad":
      "https://images.unsplash.com/photo-1505751172876-fa1923c5f528?w=1200" +
      baseParams,
  },
  blog: {
    default:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800" +
      baseParams,
    "que-es-la-manga-gastrica":
      "https://images.unsplash.com/photo-1505751172876-fa1923c5f528?w=800" +
      baseParams,
    "alimentacion-post-cirugia-bariatrica":
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800" +
      baseParams,
    "mitos-cirugia-bariatrica":
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800" +
      baseParams,
  },
  beforeAfter: {
    before:
      "https://images.unsplash.com/photo-1573497019653-5c09eab2f197?w=600" +
      baseParams,
    after:
      "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?w=600" +
      baseParams,
  },
} as const;
