import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Weapon } from './models/weapon.entity';
import { Repository } from 'typeorm';
import { WeaponType } from './models/weapon-type.entity';
import { generateStat } from 'src/utils/calc';

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
            type: weaponType,
            bonusStrength,
            bonusDexterity,
            bonusIntelligence,
            bonusVitality,
        };

        const weapon = this.weaponRepository.create(createWeapon);
        return this.weaponRepository.save(weapon);
    }
}
