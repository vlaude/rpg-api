import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int } from 'type-graphql';
import { WeaponCategory } from './weapon-category.enum';
import { DamageType } from './damage-type.enum';
import { WeaponPostion } from './weapon-position.enum';

@Entity()
@ObjectType()
export class WeaponType {
    @PrimaryGeneratedColumn()
    @Field(type => ID)
    id: string;

    @Column({ unique: true })
    @Field()
    name: string;

    @Column({ type: 'enum', enum: WeaponCategory })
    @Field(type => WeaponCategory)
    category: WeaponCategory;

    @Column({ type: 'enum', enum: DamageType })
    @Field(type => DamageType)
    damageType: DamageType;

    @Column({ type: 'enum', enum: WeaponPostion })
    @Field(type => WeaponPostion)
    position: WeaponPostion;

    @Column({ type: 'text', nullable: true })
    @Field({ nullable: true })
    description?: string;

    @Column({ type: 'int' })
    @Field(type => Int)
    minimumDamage: number;

    @Column({ type: 'int' })
    @Field(type => Int)
    maximumDamage: number;

    @Column({ type: 'int' })
    @Field(type => Int)
    minBonusStrength: number;

    @Column({ type: 'int' })
    @Field(type => Int)
    maxBonusStrength: number;

    @Column({ type: 'int' })
    @Field(type => Int)
    minBonusDexterity: number;

    @Column({ type: 'int' })
    @Field(type => Int)
    maxBonusDexterity: number;

    @Column({ type: 'int' })
    @Field(type => Int)
    minBonusIntelligence: number;

    @Column({ type: 'int' })
    @Field(type => Int)
    maxBonusIntelligence: number;

    @Column({ type: 'int' })
    @Field(type => Int)
    minBonusVitality: number;

    @Column({ type: 'int' })
    @Field(type => Int)
    maxBonusVitality: number;
}
