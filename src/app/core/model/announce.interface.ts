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
