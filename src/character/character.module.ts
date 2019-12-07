import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Character } from './character/models/character.entity';
import { WeaponModule } from 'src/weapon/weapon.module';
import { CharacterResolver } from './character/character.resolver';
import { CharacterService } from './character/character.service';
import { InventoryResolver } from './inventory/inventory.resolver';
import { InventoryService } from './inventory/inventory.service';
import { ArmorModule } from 'src/armor/armor.module';
import { Weapon } from 'src/weapon/weapon/models/weapon.entity';
import { Armor } from 'src/armor/armor/models/armor.entity';
import { Inventory } from './inventory/models/inventory.entity';
import { ItemModule } from 'src/item/item.module';

@Module({
    imports: [TypeOrmModule.forFeature([Character, Inventory, Weapon, Armor]), WeaponModule, ArmorModule, ItemModule],
    providers: [CharacterResolver, CharacterService, InventoryResolver, InventoryService],
})
export class CharacterModule {}
