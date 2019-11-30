import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WeaponTypeResolver } from './weapon-type.resolver';
import { WeaponTypeService } from './weapon-type.service';
import { WeaponType } from './models/weapon-type.entity';
import { WeaponResolver } from './weapon.resolver';
import { WeaponService } from './weapon.service';
import { Weapon } from './models/weapon.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Weapon, WeaponType])],
    providers: [WeaponTypeResolver, WeaponTypeService, WeaponResolver, WeaponService],
})
export class WeaponModule {}
