import { Injectable } from '@nestjs/common';
import { Character } from '../character/models/character.entity';
import { Weapon } from 'src/weapon/weapon/models/weapon.entity';
import { Armor } from 'src/armor/armor/models/armor.entity';
import { Inventory } from './models/inventory.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IItem } from 'src/item/models/item.interface';
import { ItemRepository } from 'src/item/item.repository';

@Injectable()
export class InventoryService {
    constructor(private readonly itemRepository: ItemRepository) {}

    async addItem(character: Character, item: IItem): Promise<Inventory> {
        item.inventory = character.inventory;
        return this.itemRepository.addItemIntoInventory(character.inventory, item);
    }

    async findItemsByInventoryId(inventoryId: string): Promise<IItem[]> {
        return this.itemRepository.findItemsByInventoryId(inventoryId);
    }
}
