import { Injectable } from '@nestjs/common';
import { Item } from './models/item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ItemService {
    constructor(@InjectRepository(Item) private readonly itemRepository: Repository<Item>) {}

    async findOneById(id: string): Promise<Item> {
        return this.itemRepository.findOne({ where: { id }, relations: ['inventory'] });
    }

    async findByEquipmentId(equipmentId: string): Promise<Item[]> {
        return this.itemRepository.find({ equipment: { id: equipmentId } });
    }
}
