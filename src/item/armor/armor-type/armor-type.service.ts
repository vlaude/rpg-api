import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ArmorType } from './models/armor-type.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateArmorTypeInput } from './dto/create-armor-type.input';

@Injectable()
export class ArmorTypeService {
    constructor(
        @InjectRepository(ArmorType)
        private readonly armorTypeRepository: Repository<ArmorType>
    ) {}

    async findOneById(id: string): Promise<ArmorType> {
        return this.armorTypeRepository.findOne(id);
    }

    async findOneByName(name: string): Promise<ArmorType> {
        return this.armorTypeRepository.findOne({ where: { name } });
    }

    async findAll(): Promise<ArmorType[]> {
        return this.armorTypeRepository.find();
    }

    async create(createArmorTypeData: CreateArmorTypeInput): Promise<ArmorType> {
        const armorType = this.armorTypeRepository.create(createArmorTypeData);
        return this.armorTypeRepository.save(armorType);
    }
}
