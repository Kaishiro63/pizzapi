import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PizzasModule } from './pizzas/pizzas.module';

@Module({
  imports: [ConfigModule.forRoot(), PizzasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
