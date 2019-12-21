import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Character } from '../character/models/character.entity';
import { Repository, getConnection, getManager } from 'typeorm';
import { Weapon } from 'src/item/weapon/weapon/models/weapon.entity';
import { Armor } from 'src/item/armor/armor/models/armor.entity';
import { Equipment } from './models/equipment.entity';
import { Item } from 'src/item/item/models/item.entity';
import { EquipmentPosition } from './models/equipment-position.enum';

@Injectable()
export class EquipmentService {
    constructor(
        @InjectRepository(Item)
        private readonly itemRepository: Repository<Item>
    ) {}

    async equipEquipmentPiece(character: Character, piece: Item): Promise<Equipment> {
        // Check if a piece is already equiped at this position
        const alreadyEquiped = character.equipment.equipmentPieces.find(
            p => p.equipmentPosition === piece.equipmentPosition
        );

        // If yes, put the old piece into the character inventory
        if (alreadyEquiped) {
            alreadyEquiped.inventory = character.inventory;
            alreadyEquiped.equipment = null;
        }
        piece.equipment = character.equipment;
        piece.inventory = null;

        // Save both items using transaction
        const updatedPiece = await getManager().transaction(async transactionalEntityManager => {
            await this.itemRepository.save(alreadyEquiped);
            return await this.itemRepository.save(piece);
        });

        return updatedPiece.equipment;
    }
}
