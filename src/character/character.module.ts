import { Module } from '@nestjs/common';
import { CharacterResolver } from './character.resolver';
import { CharacterService } from './character.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Character } from './models/character.entity';
import { EquipmentModule } from './equipment/equipment.module';
import { WeaponModule } from 'src/weapon/weapon.module';

@Module({
    imports: [TypeOrmModule.forFeature([Character]), EquipmentModule, WeaponModule],
    providers: [CharacterResolver, CharacterService],
})
export class CharacterModule {}
