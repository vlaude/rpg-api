import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Weapon } from './models/weapon.entity';
import { Repository } from 'typeorm';
import { generateStat } from 'src/utils/calc';
import { WeaponType } from '../weapon-type/models/weapon-type.entity';

@Injectable()
export class WeaponService {
    constructor(
        @InjectRepository(Weapon)
        private readonly weaponRepository: Repository<Weapon>
    ) {}

    async findOneById(id: string): Promise<Weapon> {
        return this.weaponRepository.findOne(id);
    }

    async findAll(): Promise<Weapon[]> {
        return this.weaponRepository.find();
    }

    async create(weaponType: WeaponType): Promise<Weapon> {
        const bonusStrength = generateStat(weaponType.minBonusStrength, weaponType.maxBonusStrength);
        const bonusDexterity = generateStat(weaponType.minBonusDexterity, weaponType.maxBonusDexterity);
        const bonusIntelligence = generateStat(weaponType.minBonusIntelligence, weaponType.maxBonusIntelligence);
        const bonusVitality = generateStat(weaponType.minBonusVitality, weaponType.maxBonusVitality);

        const createWeapon = {
            weaponType,
            equipmentPosition: weaponType.equipmentPosition,
            bonusStrength,
            bonusDexterity,
            bonusIntelligence,
            bonusVitality,
            equipable: true,
        };

        const weapon = this.weaponRepository.create(createWeapon);
        return this.weaponRepository.save(weapon);
    }
}
