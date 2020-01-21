import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Character } from './character/models/character.entity';
import { CharacterResolver } from './character/character.resolver';
import { CharacterService } from './character/character.service';
import { InventoryResolver } from './inventory/inventory.resolver';
import { InventoryService } from './inventory/inventory.service';
import { Inventory } from './inventory/models/inventory.entity';
import { ItemModule } from 'src/item/item.module';
import { EquipmentResolver } from './equipment/equipment.resolver';
import { EquipmentService } from './equipment/equipment.service';
import { RaceResolver } from './race/race.resolver';
import { RaceService } from './race/race.service';
import { Race } from './race/models/race.entity';
import { Item } from 'src/item/item/models/item.entity';
import { ItemService } from 'src/item/item/item.service';
import { ClassResolver } from './class/class.resolver';
import { ClassService } from './class/class.service';
import { Class } from './class/models/class.entity';
import { Equipment } from './equipment/models/equipment.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Character, Equipment, Inventory, Item, Race, Class]), ItemModule],
    providers: [
        CharacterResolver,
        CharacterService,
        InventoryResolver,
        InventoryService,
        ItemService,
        EquipmentResolver,
        EquipmentService,
        RaceResolver,
        RaceService,
        ClassResolver,
        ClassService,
    ],
})
export class CharacterModule {}
