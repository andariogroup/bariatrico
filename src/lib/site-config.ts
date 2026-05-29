const env = {
  siteName: process.env.NEXT_PUBLIC_SITE_NAME,
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
  whatsappMessage: process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE,
  calendarUrl: process.env.NEXT_PUBLIC_CALENDAR_URL,
  mapsEmbedUrl: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL,
};

function nonEmpty(value: string | undefined | null): string | undefined {
  if (!value) return undefined;
  const trimmed = value.trim();
  return trimmed.length ? trimmed : undefined;
}

export const siteConfig = {
  name: nonEmpty(env.siteName) ?? "Dr. José Acosta - Cirugía Bariátrica",
  description:
    "Cirujano bariátrico especializado en manga gástrica, bypass gástrico y tratamiento integral de la obesidad. Consulta personalizada y resultados comprobados.",
  url: nonEmpty(env.siteUrl) ?? "http://localhost:3000",
  locale: "es_CO",
  phone: "+57 300 123 4567",
  email: "contacto@bariatrico.com",
  address: "Calle 123 #45-67, Bogotá, Colombia",
  hours: "Lunes a Viernes: 8:00 AM – 6:00 PM | Sábados: 9:00 AM – 1:00 PM",
  whatsapp: {
    number: nonEmpty(env.whatsappNumber) ?? "573001234567",
    message:
      nonEmpty(env.whatsappMessage) ??
      "Hola, me gustaría agendar una consulta de cirugía bariátrica.",
  },
  calendarUrl:
    nonEmpty(env.calendarUrl) ?? "https://cal.com/tu-usuario/consulta",
  mapsEmbedUrl:
    nonEmpty(env.mapsEmbedUrl) ??
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8!2d-74.0721!3d4.711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNDInNDAuMCJOIDc0wrAwNCcxOS42Ilc!5e0!3m2!1ses!2sco!4v1",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    tiktok: "https://tiktok.com",
  },
} as const;

export function getWhatsAppUrl(customMessage?: string) {
  const message = encodeURIComponent(
    customMessage ?? siteConfig.whatsapp.message
  );
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${message}`;
}
