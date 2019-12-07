import { Resolver, Mutation, Args, Parent, ResolveProperty } from '@nestjs/graphql';
import { Inventory } from './models/inventory.entity';
import { CharacterService } from '../character/character.service';
import { AddItemInput } from './dto/add-item.input';
import { UserInputError } from 'apollo-server-errors';
import { AddItemType } from './dto/item-type.enum';
import { WeaponService } from 'src/weapon/weapon/weapon.service';
import { ArmorService } from 'src/armor/armor/armor.service';
import { Weapon } from 'src/weapon/weapon/models/weapon.entity';
import { Armor } from 'src/armor/armor/models/armor.entity';
import { InventoryService } from './inventory.service';
import { IItem } from 'src/item/models/item.interface';

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

        return await this.inventoryService.addItem(character, item);
    }

    @ResolveProperty()
    async items(@Parent() inventory: Inventory) {
        return await this.inventoryService.findItemsByInventoryId(inventory.id);
    }
}
