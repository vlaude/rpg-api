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

    @Field(() => WeaponCategoryBonus, { nullable: true })
    weaponCategoryBonus?: WeaponCategoryBonus;

    @Field(() => StatisticBonus, { nullable: true })
    statBonus?: StatisticBonus;

    @Field(() => Insensibility, { nullable: true })
    insensibility?: Insensibility;

    @Field(() => Passive, { nullable: true })
    passive?: Passive;

    @Field(() => [String])
    compatibleRacesIds: string[];
}
