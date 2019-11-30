import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { WeaponType } from './models/weapon-type.entity';
import { CreateWeaponTypeInput } from './dto/create-weapon-type.input';

@Injectable()
export class WeaponTypeService {
    constructor(
        @InjectRepository(WeaponType)
        private readonly weaponTypeRepository: Repository<WeaponType>
    ) {}

    async findOneById(id: string): Promise<WeaponType> {
        return this.weaponTypeRepository.findOne(id);
    }

    async findOneByName(name: string): Promise<WeaponType> {
        return this.weaponTypeRepository.findOne({ where: { name } });
    }

    async findAll(): Promise<WeaponType[]> {
        return this.weaponTypeRepository.find();
    }

    async create(createWeaponTypeData: CreateWeaponTypeInput): Promise<WeaponType> {
        const weaponType = this.weaponTypeRepository.create(createWeaponTypeData);
        return this.weaponTypeRepository.save(weaponType);
    }
}
