import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { Weapon } from './models/weapon.entity';
import { WeaponService } from './weapon.service';
import { CreateWeaponInput } from './dto/create-weapon.input';
import { WeaponTypeService } from './weapon-type.service';
import { UserInputError } from 'apollo-server-errors';

@Resolver(of => Weapon)
export class WeaponResolver {
    constructor(private readonly weaponService: WeaponService, private readonly weaponTypeService: WeaponTypeService) {}

    @Mutation(returns => Weapon)
    async createWeapon(@Args('createWeaponData') createWeaponData: CreateWeaponInput): Promise<Weapon> {
        const weaponType = await this.weaponTypeService.findOneById(createWeaponData.weaponTypeId);
        if (!weaponType) {
            throw new UserInputError(`No weapon type found for id ${createWeaponData.weaponTypeId}`);
        }
        return this.weaponService.create(weaponType);
    }
}
