import { Resolver, Mutation, Args, Query, Parent, ResolveProperty } from '@nestjs/graphql';
import { Weapon } from './models/weapon.entity';
import { WeaponService } from './weapon.service';
import { CreateWeaponInput } from './dto/create-weapon.input';
import { WeaponTypeService } from '../weapon-type/weapon-type.service';
import { UserInputError } from 'apollo-server-errors';
import { WeaponCategory } from '../weapon-type/models/weapon-category.enum';
import { WeaponDamageType } from '../weapon-type/models/weapon-damage-type.enum';
import { EquipmentPosition } from 'src/character/equipment/models/equipment-position.enum';

@Resolver(() => Weapon)
export class WeaponResolver {
    constructor(private readonly weaponService: WeaponService, private readonly weaponTypeService: WeaponTypeService) {}

    @Query(() => Weapon, { name: 'weapon' })
    async getWeaponById(@Args('id') id: string): Promise<Weapon> {
        const weapon = await this.weaponService.findOneById(id);
        if (!weapon) {
            throw new UserInputError(`No weapon found for id ${id}`);
        }
        return weapon;
    }

    @Query(() => [Weapon], { name: 'weapons' })
    async getWeapons(): Promise<Weapon[]> {
        return await this.weaponService.findAll();
    }

    @Mutation(() => Weapon)
    async createWeapon(@Args('createWeaponData') createWeaponData: CreateWeaponInput): Promise<Weapon> {
        const weaponType = await this.weaponTypeService.findOneById(createWeaponData.weaponTypeId);
        if (!weaponType) {
            throw new UserInputError(`No weapon type found for id ${createWeaponData.weaponTypeId}`);
        }
        return this.weaponService.create(weaponType);
    }

    @ResolveProperty(() => String)
    async name(@Parent() weapon: Weapon) {
        return weapon.weaponType.name;
    }

    @ResolveProperty(() => String)
    async description(@Parent() weapon: Weapon) {
        return weapon.weaponType.description;
    }

    @ResolveProperty(() => WeaponCategory)
    async category(@Parent() weapon: Weapon) {
        return weapon.weaponType.category;
    }

    @ResolveProperty(() => WeaponDamageType)
    async damageType(@Parent() weapon: Weapon) {
        return weapon.weaponType.damageType;
    }

    @ResolveProperty(() => EquipmentPosition)
    async equipmentPosition(@Parent() weapon: Weapon) {
        return weapon.weaponType.equipmentPosition;
    }
}
