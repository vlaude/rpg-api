import { Field, Int, InputType } from 'type-graphql';
import { ArmorCategory } from '../models/armor-category.entity';
import { EquipmentPosition } from 'src/character/equipment/models/equipment-position.enum';

@InputType()
export class CreateArmorTypeInput {
    @Field()
    name: string;

    @Field(() => ArmorCategory)
    category: ArmorCategory;

    @Field(() => EquipmentPosition)
    equipmentPosition: EquipmentPosition;

    @Field({ nullable: true })
    description?: string;

    @Field(() => Int)
    physicArmor: number;

    @Field(() => Int)
    magicArmor: number;

    @Field(() => Int)
    minBonusStrength: number;

    @Field(() => Int)
    maxBonusStrength: number;

    @Field(() => Int)
    minBonusDexterity: number;

    @Field(() => Int)
    maxBonusDexterity: number;

    @Field(() => Int)
    minBonusIntelligence: number;

    @Field(() => Int)
    maxBonusIntelligence: number;

    @Field(() => Int)
    minBonusVitality: number;

    @Field(() => Int)
    maxBonusVitality: number;
}
