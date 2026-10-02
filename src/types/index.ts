export type Language = 'pt' | 'es';

export interface PortfolioItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'nails' | 'lashes' | 'brows' | 'estetica' | 'beauty';
  categoryLabel: Record<Language, string>;
  location: string;
  imageUrl: string;
  description: Record<Language, string>;
  features: string[];
  metrics: string;
  clientName: string;
  demoUrl?: string;
  clientServices: { name: string; price: string; duration: string }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: Record<Language, string>;
  location: string;
  quote: Record<Language, string>;
  highlight: Record<Language, string>;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: Record<Language, string>;
  answer: Record<Language, string>;
}

export interface BriefingFormData {
  fullName: string;
  businessName: string;
  niche: string;
  country: string;
  city: string;
  currentPresence: string;
  whatsapp: string;
  email: string;
  notes: string;
}
