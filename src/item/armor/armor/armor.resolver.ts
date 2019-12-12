import { Resolver, Mutation, Args, Query, ResolveProperty, Parent } from '@nestjs/graphql';
import { Armor } from './models/armor.entity';
import { ArmorService } from './armor.service';
import { CreateArmorInput } from './dto/create-armor.input';
import { ArmorTypeService } from '../armor-type/armor-type.service';
import { UserInputError } from 'apollo-server-errors';
import { ArmorCategory } from '../armor-type/models/armor-category.entity';
import { ArmorPosition } from '../armor-type/models/armor-position.enum';

@Resolver(of => Armor)
export class ArmorResolver {
    constructor(private readonly armorService: ArmorService, private readonly armorTypeService: ArmorTypeService) {}

    @Query(returns => [Armor], { name: 'armors' })
    async getArmors(): Promise<Armor[]> {
        return await this.armorService.findAll();
    }

    @Mutation(returns => Armor)
    async createArmor(@Args('createArmorData') createArmorData: CreateArmorInput): Promise<Armor> {
        const armorType = await this.armorTypeService.findOneById(createArmorData.armorTypeId);
        if (!armorType) {
            throw new UserInputError(`No armor type found for id ${createArmorData.armorTypeId}`);
        }

        return this.armorService.create(armorType);
    }

    @ResolveProperty(returns => String)
    async name(@Parent() armor: Armor) {
        return armor.type.name;
    }

    @ResolveProperty(returns => String)
    async description(@Parent() armor: Armor) {
        return armor.type.description;
    }

    @ResolveProperty(returns => ArmorCategory)
    async category(@Parent() armor: Armor) {
        return armor.type.category;
    }

    @ResolveProperty(returns => ArmorPosition)
    async position(@Parent() armor: Armor) {
        return armor.type.position;
    }

    @ResolveProperty(returns => Number)
    async physicArmor(@Parent() armor: Armor) {
        return armor.type.physicArmor;
    }

    @ResolveProperty(returns => Number)
    async magicArmor(@Parent() armor: Armor) {
        return armor.type.magicArmor;
    }
}
