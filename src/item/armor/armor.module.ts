import { Module } from '@nestjs/common';
import { ArmorService } from './armor/armor.service';
import { ArmorResolver } from './armor/armor.resolver';
import { ArmorTypeResolver } from './armor-type/armor-type.resolver';
import { ArmorTypeService } from './armor-type/armor-type.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArmorType } from './armor-type/models/armor-type.entity';
import { Armor } from './armor/models/armor.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Armor, ArmorType])],
    providers: [ArmorResolver, ArmorService, ArmorTypeResolver, ArmorTypeService],
    exports: [ArmorService],
})
export class ArmorModule {}
