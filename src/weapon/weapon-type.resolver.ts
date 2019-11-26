import { Resolver, Query } from '@nestjs/graphql';
import { WeaponType } from './entities/weapon-type.entity';
import { WeaponTypeService } from './weapon-type.service';

@Resolver(of => WeaponType)
export class WeaponTypeResolver {
    constructor(private readonly weaponTypeService: WeaponTypeService) {}

    @Query(returns => [WeaponType], { name: 'weaponTypes' })
    async getWeaponTypes(): Promise<WeaponType[]> {
        return await this.weaponTypeService.findAll();
    }
}
