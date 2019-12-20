import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Character } from '../character/models/character.entity';
import { Repository, getConnection } from 'typeorm';
import { Weapon } from 'src/item/weapon/weapon/models/weapon.entity';
import { Armor } from 'src/item/armor/armor/models/armor.entity';
import { Equipment } from './models/equipment.entity';
import { ItemRepository } from 'src/item/item/item.repository';
import { IItem } from 'src/item/item/models/item.interface';
import { IEquipable } from 'src/item/item/models/equipable.interface';

@Injectable()
export class EquipmentService {
    constructor(
        @InjectRepository(Character)
        private readonly characterRepository: Repository<Character>,
        private readonly itemRepository: ItemRepository
    ) {}

    // TODO If a weapon is already equiped at the new weapon position, put the old weapon on character's inventory
    // TODO Return a Equipment promise
    async equipEquipmentPiece(character: Character, piece: IEquipable): Promise<Equipment> {
        character.equipment[piece.position] = piece;
        return this.characterRepository.save(character);
    }
}
