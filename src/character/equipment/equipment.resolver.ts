import { Resolver, Mutation, Args, ResolveProperty, Parent } from '@nestjs/graphql';
import { UserInputError } from 'apollo-server-errors';
import { Equipment } from './models/equipment.entity';
import { EquipmentService } from './equipment.service';
import { CharacterService } from '../character/character.service';
import { EquipEquipmentPieceInput } from './dto/equip-equipment-piece.input';
import { ItemService } from 'src/item/item/item.service';
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

        let newEquipment: Equipment;
        try {
            newEquipment = await this.equipmentService.equipEquipmentPiece(character, equipmentPiece);
        } catch (error) {
            // TODO Custom Apollo error
            throw new UserInputError(error);
        }

        // TODO Remove item from character inventory
        return this.equipmentService.save(newEquipment);
    }

    @ResolveProperty(returns => [Item])
    async equipmentPieces(@Parent() equipment: Equipment) {
        return this.itemService.findByEquipmentId(equipment.id);
    }
}
