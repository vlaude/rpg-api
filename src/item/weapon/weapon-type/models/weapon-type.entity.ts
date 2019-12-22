import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ObjectType, Field, ID, Int } from 'type-graphql';
import { WeaponCategory } from './weapon-category.enum';
import { Weapon } from '../../weapon/models/weapon.entity';
import { EquipmentPosition } from 'src/character/equipment/models/equipment-position.enum';
import { WeaponDamageType } from './weapon-damage-type.enum';

@Entity()
@ObjectType()
export class WeaponType {
    @PrimaryGeneratedColumn()
    @Field(type => ID)
    id: string;

    @Column({ unique: true })
    @Field()
    name: string;

    // TODO Add constraint on position
    @Column({ type: 'enum', enum: EquipmentPosition })
    @Field(type => EquipmentPosition)
    equipmentPosition: EquipmentPosition;

    @Column({ type: 'enum', enum: WeaponCategory })
    @Field(type => WeaponCategory)
    category: WeaponCategory;

    @Column({ type: 'enum', enum: WeaponDamageType })
    @Field(type => WeaponDamageType)
    damageType: WeaponDamageType;

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

    @OneToMany(
        type => Weapon,
        weapon => weapon.weaponType
    )
    instances?: Weapon[];
}
