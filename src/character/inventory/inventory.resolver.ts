import { Resolver, Mutation, Args, Parent, ResolveProperty } from '@nestjs/graphql';
import { Inventory } from './models/inventory.entity';
import { CharacterService } from '../character/character.service';
import { AddItemInput } from './dto/add-item.input';
import { UserInputError } from 'apollo-server-errors';
import { InventoryService } from './inventory.service';
import { Item } from 'src/item/item/models/item.entity';
import { ItemService } from 'src/item/item/item.service';

@Resolver(() => Inventory)
export class InventoryResolver {
    constructor(
        private readonly inventoryService: InventoryService,
        private readonly characterService: CharacterService,
        private readonly itemService: ItemService
    ) {}

    @Mutation(() => Inventory)
    async addItem(@Args('addItemData') addItemData: AddItemInput): Promise<Inventory> {
        const character = await this.characterService.findOneById(addItemData.characterId);
        if (!character) {
            throw new UserInputError(`No character found for id ${addItemData.characterId}`);
        }
        const item = await this.itemService.findOneById(addItemData.itemId);
        if (!item) {
            throw new UserInputError(`No item found for id ${addItemData.itemId}`);
        }

        // TODO Check if item is in another inventory

        // Check if inventory is full
        const itemsAlreadyInInventory = await this.inventoryService.findItemsByInventoryId(character.inventory.id);
        if (itemsAlreadyInInventory.length >= character.inventory.capacity) {
            throw new UserInputError(`Inventory is full`);
        }

        return await this.inventoryService.addItem(character, item);
    }

    @ResolveProperty(() => [Item])
    async items(@Parent() inventory: Inventory) {
        return await this.inventoryService.findItemsByInventoryId(inventory.id);
    }
}
