import { InputType, Field } from 'type-graphql';
import { WeaponCategoryBonus } from '../models/weapon-category-bonus.embedded';
import { StatisticBonus } from '../models/statistic-bonus.embedded';
import { Insensibility } from 'src/character/race/models/insensibility.embedded';
import { Passive } from '../models/passive.embedded';

@InputType()
export class CreateClassInput {
    @Field()
    name: string;

    @Field({ nullable: true })
    description?: string;

    @Field(type => WeaponCategoryBonus, { nullable: true })
    weaponCategoryBonus?: WeaponCategoryBonus;

    @Field(type => StatisticBonus, { nullable: true })
    statBonus?: StatisticBonus;

    @Field(type => Insensibility, { nullable: true })
    insensibility?: Insensibility;

    @Field(type => Passive, { nullable: true })
    passive?: Passive;

    @Field(type => [String])
    compatibleRacesIds: string[];
}
