import { Resolver, Mutation, Args, Query, ResolveProperty, Parent } from '@nestjs/graphql';
import { Armor } from './models/armor.entity';
import { ArmorService } from './armor.service';
import { CreateArmorInput } from './dto/create-armor.input';
import { ArmorTypeService } from '../armor-type/armor-type.service';
import { UserInputError } from 'apollo-server-errors';
import { ArmorCategory } from '../armor-type/models/armor-category.entity';
import { EquipmentPosition } from 'src/character/equipment/models/equipment-position.enum';

@Resolver(() => Armor)
export class ArmorResolver {
    constructor(private readonly armorService: ArmorService, private readonly armorTypeService: ArmorTypeService) {}

    @Query(() => [Armor], { name: 'armors' })
    async getArmors(): Promise<Armor[]> {
        return await this.armorService.findAll();
    }

    @Mutation(() => Armor)
    async createArmor(@Args('createArmorData') createArmorData: CreateArmorInput): Promise<Armor> {
        const armorType = await this.armorTypeService.findOneById(createArmorData.armorTypeId);
        if (!armorType) {
            throw new UserInputError(`No armor type found for id ${createArmorData.armorTypeId}`);
        }

        return this.armorService.create(armorType);
    }

    @ResolveProperty(() => String)
    async name(@Parent() armor: Armor) {
        return armor.armorType.name;
    }

    @ResolveProperty(() => String)
    async description(@Parent() armor: Armor) {
        return armor.armorType.description;
    }

    @ResolveProperty(() => ArmorCategory)
    async category(@Parent() armor: Armor) {
        return armor.armorType.category;
    }

    @ResolveProperty(() => EquipmentPosition)
    async equipmentPosition(@Parent() armor: Armor) {
        return armor.armorType.equipmentPosition;
    }

    @ResolveProperty(() => Number)
    async physicArmor(@Parent() armor: Armor) {
        return armor.armorType.physicArmor;
    }

    @ResolveProperty(() => Number)
    async magicArmor(@Parent() armor: Armor) {
        return armor.armorType.magicArmor;
    }
}
