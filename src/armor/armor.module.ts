import { Module } from '@nestjs/common';
import { ArmorService } from './armor/armor.service';
import { ArmorResolver } from './armor/armor.resolver';
import { ArmorTypeResolver } from './armor-type/armor-type.resolver';
import { ArmorTypeService } from './armor-type/armor-type.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArmorType } from './armor-type/models/armor-type.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ArmorType])],
    providers: [ArmorResolver, ArmorService, ArmorTypeResolver, ArmorTypeService],
})
export class ArmorModule {}
