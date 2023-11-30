import { TypeImmobilier } from './type-immobilier.enum';

export interface Announce {
  anncID: number;
  propType: string;
  anncType: string;
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
  images?: File[];
  imgPaths?: string[];
}

/* export interface AnnounceResponse {
  propType: string;
  anncType: string;
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
} */

export interface Property {
  prpType: string;
  annType: string;
  jrcType: string;
  willaya: string;
  address: string;
  etage: number;
  facade: number;
  price: number;
  surface: number;
  service: string[];
  hygiene: string[];
  pieces: string;
  servicePublic: string[];
  climatisation: string;
  chauffage: string;
  cuisin: string;
  disponible: string;
  description: string;
  etatType: string;
  meublee: string;
  avances: string;
  city: string;
  negociable: string;
  imgPath?: string[];
}
