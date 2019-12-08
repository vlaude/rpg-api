import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Character } from './character/models/character.entity';
import { CharacterResolver } from './character/character.resolver';
import { CharacterService } from './character/character.service';
import { InventoryResolver } from './inventory/inventory.resolver';
import { InventoryService } from './inventory/inventory.service';
import { Inventory } from './inventory/models/inventory.entity';
import { ItemModule } from 'src/item/item.module';
import { WeaponModule } from 'src/item/weapon/weapon.module';
import { Weapon } from 'src/item/weapon/weapon/models/weapon.entity';
import { ArmorModule } from 'src/item/armor/armor.module';
import { Armor } from 'src/item/armor/armor/models/armor.entity';
import { EquipmentResolver } from './equipment/equipment.resolver';
import { EquipmentService } from './equipment/equipment.service';

@Module({
    imports: [TypeOrmModule.forFeature([Character, Inventory, Weapon, Armor]), WeaponModule, ArmorModule, ItemModule],
    providers: [CharacterResolver, CharacterService, InventoryResolver, InventoryService, EquipmentResolver, EquipmentService],
})
export class CharacterModule {}
