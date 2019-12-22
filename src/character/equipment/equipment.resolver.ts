import { Resolver, Mutation, Args, ResolveProperty, Parent } from '@nestjs/graphql';
import { UserInputError } from 'apollo-server-errors';
import { Equipment } from './models/equipment.entity';
import { Character } from '../character/models/character.entity';
import { EquipmentService } from './equipment.service';
import { CharacterService } from '../character/character.service';
import { WeaponService } from 'src/item/weapon/weapon/weapon.service';
import { Logger } from '@nestjs/common';
import { ArmorService } from 'src/item/armor/armor/armor.service';
import { EquipEquipmentPieceInput } from './dto/equip-equipment-piece.input';
import { ItemService } from 'src/item/item/item.service';
import { Weapon } from 'src/item/weapon/weapon/models/weapon.entity';
import { Armor } from 'src/item/armor/armor/models/armor.entity';
import { Item } from 'src/item/item/models/item.entity';

@Resolver(of => Equipment)
export class EquipmentResolver {
    constructor(
        private readonly equipmentService: EquipmentService,
        private readonly characterService: CharacterService,
        private readonly itemService: ItemService
    ) {}

    @Mutation(returns => Equipment)
    async equipEquipmentPiece(
        @Args('equipEquipmentPieceData') equipEquipmentPieceData: EquipEquipmentPieceInput
    ): Promise<Equipment> {
        const character = await this.characterService.findOneById(equipEquipmentPieceData.characterId);
        if (!character) {
            throw new UserInputError(`No character found for id ${equipEquipmentPieceData.characterId}`);
        }
        let equipmentPiece = await this.itemService.findOneById(equipEquipmentPieceData.equipmentPieceId);
        if (!equipmentPiece) {
            throw new UserInputError(`No item found for id ${equipEquipmentPieceData.equipmentPieceId}`);
        }
        if (!equipmentPiece.equipable) {
            throw new UserInputError(`Item ${equipEquipmentPieceData.equipmentPieceId} is not equipable`);
        }

        if (equipmentPiece.inventory?.id !== character.inventory.id) {
            throw new UserInputError(
                `Item ${equipEquipmentPieceData.equipmentPieceId} is not in character ${character.id} inventory`
            );
        }

        return await this.equipmentService.equipEquipmentPiece(character, equipmentPiece);
    }

    @ResolveProperty(returns => [Item])
    async equipmentPieces(@Parent() equipment: Equipment) {
        return this.itemService.findByEquipmentId(equipment.id);
    }
}
