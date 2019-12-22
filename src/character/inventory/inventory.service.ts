import { Injectable } from '@nestjs/common';
import { Character } from '../character/models/character.entity';
import { Inventory } from './models/inventory.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from 'src/item/item/models/item.entity';

@Injectable()
export class InventoryService {
    constructor(@InjectRepository(Item) private readonly itemRepository: Repository<Item>) {}

    async findItemsByInventoryId(inventoryId: string): Promise<Item[]> {
        return this.itemRepository.find({ inventory: { id: inventoryId } });
    }

    async addItem(character: Character, item: Item): Promise<Inventory> {
        item.inventory = character.inventory;
        const itemUpdated = await this.itemRepository.save(item);
        return itemUpdated.inventory;
    }
}
