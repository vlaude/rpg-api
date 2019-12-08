import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ArmorType } from './models/armor-type.entity';
import { ArmorTypeService } from './armor-type.service';
import { CreateArmorTypeInput } from './dto/create-armor-type.input';
import { UserInputError } from 'apollo-server-errors';

@Resolver(of => ArmorType)
export class ArmorTypeResolver {
    constructor(private readonly armorTypeService: ArmorTypeService) {}

    @Query(returns => [ArmorType], { name: 'armorTypes' })
    async getArmorTypes(): Promise<ArmorType[]> {
        return await this.armorTypeService.findAll();
    }

    @Mutation(returns => ArmorType)
    async createArmorType(@Args('createArmorTypeData') createArmorTypeData: CreateArmorTypeInput): Promise<ArmorType> {
        const armorType = await this.armorTypeService.findOneByName(createArmorTypeData.name);
        if (armorType) {
            throw new UserInputError(`A armor type with this name already exists`);
        }
        return await this.armorTypeService.create(createArmorTypeData);
    }
}
