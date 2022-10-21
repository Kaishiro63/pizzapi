import { PizzaFlavor } from '../pizza-flavor';
export class CreatePizzaDto {
  name: string;
  flavor: PizzaFlavor;
  speciality: boolean;
  price: number;
  end?: Date;
}
