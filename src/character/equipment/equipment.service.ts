import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Character } from '../character/models/character.entity';
import { Repository } from 'typeorm';
import { Equipment } from './models/equipment.entity';
import { Item } from 'src/item/item/models/item.entity';

@Injectable()
export class EquipmentService {
    constructor(
        @InjectRepository(Equipment)
        private readonly equipmentRepository: Repository<Equipment>
    ) {}

    async equipEquipmentPiece(character: Character, piece: Item): Promise<Equipment> {
        // Check if piece is equipable
        if (!piece.equipable) {
            throw new Error('This item is not equipable');
        }

        // Check if piece is in character inventory
        if (piece.inventory?.id !== character.inventory.id) {
            throw new Error('Item is not in the character inventory');
        }

        // Check if a piece is already equipped at this position
        const alreadyEquipped = character.equipment.equipmentPieces.find(
            p => p.equipmentPosition === piece.equipmentPosition
        );

        // If yes, throw an error
        if (alreadyEquipped) {
            throw new Error('A equipment piece is already equipped at this position');
        }

        character.equipment.equipmentPieces.push(piece);

        return character.equipment;
    }

    async save(equipment: Equipment): Promise<Equipment> {
        return this.equipmentRepository.save(equipment);
    }
}
