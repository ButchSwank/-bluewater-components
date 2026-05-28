export interface Product {
  id: number;
  name: string;
  category: string;
  manufacturer: string;
  sku: string;
  description: string;
  specs: string;
  image: string;
  leadTime: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string; // lucide icon name
  features: string[];
  image?: string;
}
