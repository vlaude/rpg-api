import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { Weapon } from './models/weapon.entity';
import { WeaponService } from './weapon.service';
import { CreateWeaponInput } from './dto/create-weapon.input';
import { UserInputError } from 'apollo-server-errors';
import { WeaponTypeService } from '../weapon-type/weapon-type.service';

@Resolver(of => Weapon)
export class WeaponResolver {
    constructor(private readonly weaponService: WeaponService, private readonly weaponTypeService: WeaponTypeService) {}

    @Query(returns => Weapon, { name: 'weapon' })
    async getWeaponById(@Args('id') id: string): Promise<Weapon> {
        const weapon = await this.weaponService.findOneById(id);
        if (!weapon) {
            throw new UserInputError(`No weapon found for id ${id}`);
        }
        return weapon;
    }

    @Query(returns => [Weapon], { name: 'weapons' })
    async getWeapons(): Promise<Weapon[]> {
        return await this.weaponService.findAll();
    }

    @Mutation(returns => Weapon)
    async createWeapon(@Args('createWeaponData') createWeaponData: CreateWeaponInput): Promise<Weapon> {
        const weaponType = await this.weaponTypeService.findOneById(createWeaponData.weaponTypeId);
        if (!weaponType) {
            throw new UserInputError(`No weapon type found for id ${createWeaponData.weaponTypeId}`);
        }
        return this.weaponService.create(weaponType);
    }
}
