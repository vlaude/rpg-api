import { Resolver, Mutation, Args, Parent, ResolveProperty } from '@nestjs/graphql';
import { Inventory } from './models/inventory.entity';
import { CharacterService } from '../character/character.service';
import { AddItemInput } from './dto/add-item.input';
import { UserInputError } from 'apollo-server-errors';
import { AddItemType } from './dto/item-type.enum';
import { InventoryService } from './inventory.service';
import { WeaponService } from 'src/item/weapon/weapon/weapon.service';
import { ArmorService } from 'src/item/armor/armor/armor.service';
import { IItem } from 'src/item/item/models/item.interface';
import { Logger } from '@nestjs/common';

@Resolver(of => Inventory)
export class InventoryResolver {
    constructor(
        private readonly inventoryService: InventoryService,
        private readonly characterService: CharacterService,
        private readonly weaponService: WeaponService,
        private readonly armorService: ArmorService
    ) {}

    @Mutation(returns => Inventory)
    async addItem(@Args('addItemData') addItemData: AddItemInput): Promise<Inventory> {
        const character = await this.characterService.findOneById(addItemData.characterId);
        if (!character) {
            throw new UserInputError(`No character found for id ${addItemData.characterId}`);
        }

        // Find item by its type
        let item: IItem;
        switch (addItemData.type) {
            case AddItemType.WEAPON:
                item = await this.weaponService.findOneById(addItemData.itemId);
                break;
            case AddItemType.ARMOR:
                item = await this.armorService.findOneById(addItemData.itemId);
                break;
            default:
                throw new UserInputError(`This item type is not yet handled`);
        }
        if (!item) {
            throw new UserInputError(`No item found for id ${addItemData.itemId} or you passed a wrong type`);
        }

        // Check if inventory is full
        const itemsAlreadyInInventory = await this.inventoryService.findItemsByInventoryId(character.inventory.id);
        if (itemsAlreadyInInventory.length >= character.inventory.capacity) {
            throw new UserInputError(`Inventory is full`);
        }

        return await this.inventoryService.addItem(character, item);
    }

    @ResolveProperty()
    async items(@Parent() inventory: Inventory) {
        return await this.inventoryService.findItemsByInventoryId(inventory.id);
    }
}
