import { Injectable } from '@nestjs/common';
import { WeaponType } from './entities/weapon-type.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class WeaponTypeService {
    constructor(
        @InjectRepository(WeaponType)
        private readonly weaponTypeRepository: Repository<WeaponType>
    ) {}

    async findAll(): Promise<WeaponType[]> {
        return this.weaponTypeRepository.find();
    }
}
