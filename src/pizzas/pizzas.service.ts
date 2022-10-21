import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';
import { Pizza } from './entities/pizza.entity';

@Injectable()
export class PizzasService {
  findOneBy: any;
  constructor(@InjectRepository(Pizza) private data: Repository<Pizza>) {}

  create(dto: CreatePizzaDto): Promise<Pizza> {
    return this.data.save(dto);
  }

  findAll(): Promise<Pizza[]> {
    return this.data.find();
  }

  findOne(id: number): Promise<Pizza> {
    return this.data.findOneBy({ id }).catch(() => {
      throw new NotFoundException(id);
    });
  }

  async update(id: number, dto: UpdatePizzaDto): Promise<Pizza> {
    const done = await this.data.update(id, dto);
    if (done.affected != 1) throw new NotFoundException(id);
    return this.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    const done: DeleteResult = await this.data.delete(id);
    if (done.affected != 1) throw new NotFoundException(id);
  }
}
