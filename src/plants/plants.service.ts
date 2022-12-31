import { Injectable } from '@nestjs/common';
import { InternalServerErrorException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlantDto } from './dto/create-plant.dto';
import { UpdatePlantDto } from './dto/update-plant.dto';
import { Plant } from './entities/plant.entity';

@Injectable()
export class PlantsService {

  constructor(
    @InjectRepository(Plant)
    private readonly plantRepository: Repository<Plant>,
  ){}
  
  
  async create(createPlantDto: CreatePlantDto) {
    try {
      const plants = this.plantRepository.create(createPlantDto);
      await this.plantRepository.save(plants);
      return plants;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException("Ayuda!");
      
    }
  }

  findAll() {
    return `This action returns all plants`;
  }

  findOne(id: number) {
    return `This action returns a #${id} plant`;
  }

  update(id: number, updatePlantDto: UpdatePlantDto) {
    return `This action updates a #${id} plant`;
  }

  remove(id: number) {
    return `This action removes a #${id} plant`;
  }
}
