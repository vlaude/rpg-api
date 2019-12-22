import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Armor } from './models/armor.entity';
import { Repository } from 'typeorm';
import { ArmorType } from '../armor-type/models/armor-type.entity';
import { generateStat } from 'src/utils/calc';

@Injectable()
export class ArmorService {
    constructor(@InjectRepository(Armor) private readonly armorRepository: Repository<Armor>) {}

    async findOneById(id: string): Promise<Armor> {
        return this.armorRepository.findOne(id);
    }

    async findAll(): Promise<Armor[]> {
        const armors = await this.armorRepository.find();
        return armors;
    }

    async create(armorType: ArmorType): Promise<Armor> {
        const bonusStrength = generateStat(armorType.minBonusStrength, armorType.maxBonusStrength);
        const bonusDexterity = generateStat(armorType.minBonusDexterity, armorType.maxBonusDexterity);
        const bonusIntelligence = generateStat(armorType.minBonusIntelligence, armorType.maxBonusIntelligence);
        const bonusVitality = generateStat(armorType.minBonusVitality, armorType.maxBonusVitality);

        const createArmor = {
            armorType: armorType,
            equipmentPosition: armorType.equipmentPosition,
            bonusStrength,
            bonusDexterity,
            bonusIntelligence,
            bonusVitality,
            equipable: true,
        };

        const armor = this.armorRepository.create(createArmor);
        return this.armorRepository.save(armor);
    }
}
