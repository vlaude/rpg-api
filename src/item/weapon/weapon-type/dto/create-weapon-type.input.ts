import { InputType, Field, Int } from 'type-graphql';
import { WeaponCategory } from '../models/weapon-category.enum';
import { WeaponDamageType } from '../models/weapon-damage-type.enum';
import { EquipmentPosition } from 'src/character/equipment/models/equipment-position.enum';

@InputType()
export class CreateWeaponTypeInput {
    @Field()
    name: string;

    @Field(type => WeaponCategory)
    category: WeaponCategory;

    @Field(type => WeaponDamageType)
    damageType: WeaponDamageType;

    @Field(type => EquipmentPosition)
    position: EquipmentPosition;

    @Field({ nullable: true })
    description?: string;

    @Field(type => Int)
    minimumDamage: number;

    @Field(type => Int)
    maximumDamage: number;

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
