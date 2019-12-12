import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Weapon } from './weapon/models/weapon.entity';
import { WeaponType } from './weapon-type/models/weapon-type.entity';
import { WeaponTypeResolver } from './weapon-type/weapon-type.resolver';
import { WeaponTypeService } from './weapon-type/weapon-type.service';
import { WeaponResolver } from './weapon/weapon.resolver';
import { WeaponService } from './weapon/weapon.service';

@Module({
    imports: [TypeOrmModule.forFeature([Weapon, WeaponType])],
    providers: [WeaponTypeResolver, WeaponTypeService, WeaponResolver, WeaponService],
    exports: [WeaponService],
})
export class WeaponModule {}
