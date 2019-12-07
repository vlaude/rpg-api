import { Module } from '@nestjs/common';
import { ArmorModule } from 'src/armor/armor.module';
import { WeaponModule } from 'src/weapon/weapon.module';
import { ItemService } from './item.service';
import { ItemRepositoryProvider } from './item.repository';

@Module({
    providers: [ItemService, ItemRepositoryProvider],
    exports: [ItemRepositoryProvider],
})
export class ItemModule {}
