import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UserInputError } from 'apollo-server-errors';
import { WeaponTypeService } from './weapon-type.service';
import { CreateWeaponTypeInput } from './dto/create-weapon-type.input';
import { WeaponType } from './models/weapon-type.entity';

@Resolver(of => WeaponType)
export class WeaponTypeResolver {
    constructor(private readonly weaponTypeService: WeaponTypeService) {}

    @Query(returns => [WeaponType], { name: 'weaponTypes' })
    async getWeaponTypes(): Promise<WeaponType[]> {
        return await this.weaponTypeService.findAll();
    }

    @Mutation(returns => WeaponType)
    async createWeaponType(
        @Args('createWeaponTypeData') createWeaponTypeData: CreateWeaponTypeInput
    ): Promise<WeaponType> {
        const weaponType = await this.weaponTypeService.findOneByName(createWeaponTypeData.name);
        if (weaponType) {
            throw new UserInputError('A weapon type with this name already exists');
        }
        return this.weaponTypeService.create(createWeaponTypeData);
    }
}
