import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Character } from '../character/models/character.entity';
import { Repository } from 'typeorm';
import { Weapon } from 'src/item/weapon/weapon/models/weapon.entity';
import { WeaponPostion } from 'src/item/weapon/weapon-type/models/weapon-position.enum';

@Injectable()
export class EquipmentService {
    constructor(
        @InjectRepository(Character)
        private readonly characterRepository: Repository<Character>
    ) {}

    // TODO If a weapon is already equiped at the new weapon position, put the old weapon on character's inventory
    async equipWeapon(character: Character, weapon: Weapon): Promise<Character> {
        switch (weapon.type.position) {
            case WeaponPostion.HAND_LEFT:
                character.equipment.handLeft = weapon;
                break;
            case WeaponPostion.HAND_RIGHT:
                character.equipment.handRight = weapon;
                break;
            case WeaponPostion.TWO_HANDED:
                character.equipment.twoHanded = weapon;
                break;
        }
        return this.characterRepository.save(character);
    }
}
