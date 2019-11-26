import { Module } from '@nestjs/common';
import { WeaponTypeResolver } from './weapon-type.resolver';
import { WeaponTypeService } from './weapon-type.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WeaponType } from './entities/weapon-type.entity';

@Module({
    imports: [TypeOrmModule.forFeature([WeaponType])],
    providers: [WeaponTypeResolver, WeaponTypeService],
})
export class WeaponModule {}
