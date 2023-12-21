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

export interface Property {
  id?: number;
  prpType: string;
  annType: string;
  jrcType: string;
  etatType: string;
  address: string;
  willaya: string;
  etage: number;
  facade: number;
  price: number;
  surface: number;
  imagesLink?: string[];
  service: string[];
  hygiene: string[];
  piece: string;
  servicePublic: string[];
  climatisation: string;
  chauffage: string;
  cuisin: string;
  disponible: string;
  description: string;
  meublee: string;
  avances: string;
  etatCity: string;
  negociable: string;
}
