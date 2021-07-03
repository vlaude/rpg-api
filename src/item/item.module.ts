import { Module } from '@nestjs/common';
import { ItemService } from './item/item.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './item/models/item.entity';
import { Armor } from './armor/armor/models/armor.entity';
import { ArmorType } from './armor/armor-type/models/armor-type.entity';
import { ArmorResolver } from './armor/armor/armor.resolver';
import { ArmorService } from './armor/armor/armor.service';
import { ArmorTypeResolver } from './armor/armor-type/armor-type.resolver';
import { ArmorTypeService } from './armor/armor-type/armor-type.service';
import { Weapon } from './weapon/weapon/models/weapon.entity';
import { WeaponType } from './weapon/weapon-type/models/weapon-type.entity';
import { WeaponTypeResolver } from './weapon/weapon-type/weapon-type.resolver';
import { WeaponTypeService } from './weapon/weapon-type/weapon-type.service';
import { WeaponResolver } from './weapon/weapon/weapon.resolver';
import { WeaponService } from './weapon/weapon/weapon.service';

@Module({
    imports: [TypeOrmModule.forFeature([Item, Armor, ArmorType, Weapon, WeaponType])],
    providers: [
        ItemService,
        ArmorResolver,
        ArmorService,
        ArmorTypeResolver,
        ArmorTypeService,
        WeaponTypeResolver,
        WeaponTypeService,
        WeaponResolver,
        WeaponService,
    ],
    exports: [ItemService],
})
export class ItemModule {}
