import { Module } from '@nestjs/common';
import { ItemService } from './item/item.service';
import { ItemRepositoryProvider } from './item/item.repository';

@Module({
    providers: [ItemService, ItemRepositoryProvider],
    exports: [ItemRepositoryProvider],
})
export class ItemModule {}
