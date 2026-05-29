export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  faqs: FAQ[];
  image: string;
  icon: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  procedure: string;
  content: string;
  rating: number;
}

export interface BeforeAfter {
  id: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  createdAt: string;
  author: string;
}

export interface LeadFormData {
  nombre: string;
  telefono: string;
  email: string;
  ciudad: string;
  interes: string;
}

export interface ContactFormData {
  nombre: string;
  telefono: string;
  mensaje: string;
}

export type ActionResult<T = void> =
  | { success: true; data?: T }
  | { success: false; error: string };
