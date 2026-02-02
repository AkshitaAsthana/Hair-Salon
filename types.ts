
export enum ServiceType {
  CUT = 'Haircut & Styling',
  COLOR = 'Premium Coloring',
  TREATMENT = 'Luxury Treatment',
  EXTENSIONS = 'Silk Extensions'
}

export interface Service {
  id: string;
  name: ServiceType;
  price: string;
  duration: string;
  description: string;
  image: string;
}

export interface Booking {
  serviceId: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
