import { TypeImmobilier } from './type-immobilier.enum';

export interface ImmobilierInterface {
  type: TypeImmobilier;
  price: number;
  caractéristiques: Array<string>;
  willaya: string;
  address: string;
  images: Array<string>;
  description: string;
}
