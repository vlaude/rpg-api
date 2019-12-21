import { Module } from '@nestjs/common';
import { ItemService } from './item/item.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './item/models/item.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Item])],
    providers: [ItemService],
    exports: [ItemService],
})
export class ItemModule {}
