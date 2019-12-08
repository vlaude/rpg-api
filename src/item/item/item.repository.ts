import { EntityRepository, EntityManager, Connection } from 'typeorm';
import { IItem } from './models/item.interface';
import { Inventory } from 'src/character/inventory/models/inventory.entity';
import { Logger } from '@nestjs/common';
import { Weapon } from '../weapon/weapon/models/weapon.entity';
import { Armor } from '../armor/armor/models/armor.entity';

@EntityRepository()
export class ItemRepository {
    constructor(private manager: EntityManager) {}

    async addItemIntoInventory(inventory: Inventory, item: IItem): Promise<Inventory> {
        item.inventory = inventory;
        let itemUpdated: IItem;
        if (item instanceof Weapon) {
            itemUpdated = await this.manager.save(Weapon, item);
        } else if (item instanceof Armor) {
            itemUpdated = await this.manager.save(Armor, item);
        } else {
            throw new Error('This item type is not yet implemented on ItemRepository');
        }

        return itemUpdated.inventory;
    }

    async findItemsByInventoryId(inventoryId: string): Promise<IItem[]> {
        const weapons = await this.manager.find(Weapon, { inventory: { id: inventoryId } });
        const armors = await this.manager.find(Armor, { inventory: { id: inventoryId } });
        return [...armors, ...weapons];
    }
}

export const ItemRepositoryProvider = {
    provide: 'ItemRepository',
    useFactory: (connection: Connection) => connection.getCustomRepository(ItemRepository),
    inject: [Connection],
};
