import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WeaponTypeResolver } from './weapon-type.resolver';
import { WeaponTypeService } from './weapon-type.service';
import { WeaponType } from './models/weapon-type.entity';

@Module({
    imports: [TypeOrmModule.forFeature([WeaponType])],
    providers: [WeaponTypeResolver, WeaponTypeService],
})
export class WeaponModule {}
