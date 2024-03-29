import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import { PizzaFlavor } from '../pizza-flavor';
@Entity()
export class Pizza {
  @PrimaryGeneratedColumn()
  id!: number;

  @Index({ unique: true })
  @Column({ length: 100 })
  name!: string;

  @Index()
  @Column({ type: 'enum', enum: PizzaFlavor })
  flavor!: PizzaFlavor;

  @Column({ type: 'timestamp', default: () => 'current_timestamp' })
  created!: Date;

  @Column({ default: false })
  speciality!: boolean;

  @Column()
  price!: number;

  @Column({ nullable: true })
  end?: Date;
}
