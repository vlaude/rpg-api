import { InputType, Field, Int } from 'type-graphql';
import { WeaponCategory } from '../models/weapon-category.enum';
import { DamageType } from '../models/damage-type.enum';
import { WeaponPostion } from '../models/weapon-position.enum';

@InputType()
export class CreateWeaponTypeInput {
    @Field()
    name: string;

    @Field(type => WeaponCategory)
    category: WeaponCategory;

    @Field(type => DamageType)
    damageType: DamageType;

    @Field(type => WeaponPostion)
    position: WeaponPostion;

    @Field({ nullable: true })
    description?: string;

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
