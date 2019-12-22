import { Field, Int, InputType } from 'type-graphql';
import { ArmorCategory } from '../models/armor-category.entity';
import { EquipmentPosition } from 'src/character/equipment/models/equipment-position.enum';

@InputType()
export class CreateArmorTypeInput {
    @Field()
    name: string;

    @Field(type => ArmorCategory)
    category: ArmorCategory;

    @Field(type => EquipmentPosition)
    equipmentPosition: EquipmentPosition;

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
