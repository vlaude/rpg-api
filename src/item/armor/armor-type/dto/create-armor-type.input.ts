import { Field, Int, InputType } from 'type-graphql';
import { ArmorPosition } from '../models/armor-position.enum';
import { ArmorCategory } from '../models/armor-category.entity';

@InputType()
export class CreateArmorTypeInput {
    @Field()
    name: string;

    @Field(type => ArmorCategory)
    category: ArmorCategory;

    @Field(type => ArmorPosition)
    position: ArmorPosition;

    @Field({ nullable: true })
    description?: string;

    @Field(type => Int)
    physicArmor: number;

    @Field(type => Int)
    magicArmor: number;

    @Field(type => Int)
    minBonusStrength: number;

    @Field(type => Int)
    maxBonusStrength: number;

    @Field(type => Int)
    minBonusDexterity: number;

    @Field(type => Int)
    maxBonusDexterity: number;

    @Field(type => Int)
    minBonusIntelligence: number;

    @Field(type => Int)
    maxBonusIntelligence: number;

    @Field(type => Int)
    minBonusVitality: number;

    @Field(type => Int)
    maxBonusVitality: number;
}
