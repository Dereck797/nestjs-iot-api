import { Module } from '@nestjs/common';
import { PlantsService } from './plants.service';
import { PlantsController } from './plants.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plant } from './entities/plant.entity';

@Module({
  controllers: [PlantsController],
  providers: [PlantsService],
  imports: [
    TypeOrmModule.forFeature([ Plant ])
  ]
})
export class PlantsModule {}
