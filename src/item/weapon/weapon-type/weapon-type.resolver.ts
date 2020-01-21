import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UserInputError } from 'apollo-server-errors';
import { WeaponTypeService } from './weapon-type.service';
import { CreateWeaponTypeInput } from './dto/create-weapon-type.input';
import { WeaponType } from './models/weapon-type.entity';

@Resolver(() => WeaponType)
export class WeaponTypeResolver {
    constructor(private readonly weaponTypeService: WeaponTypeService) {}

    @Query(() => [WeaponType], { name: 'weaponTypes' })
    async getWeaponTypes(): Promise<WeaponType[]> {
        return await this.weaponTypeService.findAll();
    }

    @Mutation(() => WeaponType)
    async createWeaponType(
        @Args('createWeaponTypeData') createWeaponTypeData: CreateWeaponTypeInput
    ): Promise<WeaponType> {
        const weaponType = await this.weaponTypeService.findOneByName(createWeaponTypeData.name);
        if (weaponType) {
            throw new UserInputError('A weapon type with this name already exists');
        }
        return await this.weaponTypeService.create(createWeaponTypeData);
    }
}
