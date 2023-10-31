import { TypeImmobilier } from './type-immobilier.enum';

export interface Announce {
  propType: string;
  ancType: string;
  address: string;
  willaya: string;
  surface: number;
  price: number;
  juridicType: string;
  etage: number;
  facade: number;
  title?: string;
  description?: string;
  serviceAccessibility?: string[];
  cuisin?: string;
  hygiene?: string[];
  pieces?: string[];
  lime?: string;
  airCondition?: boolean;
  publicService?: string[];
  availability?: string;
  images: File[];
}
