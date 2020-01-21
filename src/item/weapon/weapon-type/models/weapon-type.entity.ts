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
    @Field(() => ID)
    id: string;

    @Column({ unique: true })
    @Field()
    name: string;

    // TODO Add constraint on position
    @Column({ type: 'enum', enum: EquipmentPosition })
    @Field(() => EquipmentPosition)
    equipmentPosition: EquipmentPosition;

    @Column({ type: 'enum', enum: WeaponCategory })
    @Field(() => WeaponCategory)
    category: WeaponCategory;

    @Column({ type: 'enum', enum: WeaponDamageType })
    @Field(() => WeaponDamageType)
    damageType: WeaponDamageType;

    @Column({ type: 'text', nullable: true })
    @Field({ nullable: true })
    description?: string;

    @Column({ type: 'int' })
    @Field(() => Int)
    minimumDamage: number;

    @Column({ type: 'int' })
    @Field(() => Int)
    maximumDamage: number;

    @Column({ type: 'int' })
    @Field(() => Int)
    minBonusStrength: number;

    @Column({ type: 'int' })
    @Field(() => Int)
    maxBonusStrength: number;

    @Column({ type: 'int' })
    @Field(() => Int)
    minBonusDexterity: number;

    @Column({ type: 'int' })
    @Field(() => Int)
    maxBonusDexterity: number;

    @Column({ type: 'int' })
    @Field(() => Int)
    minBonusIntelligence: number;

    @Column({ type: 'int' })
    @Field(() => Int)
    maxBonusIntelligence: number;

    @Column({ type: 'int' })
    @Field(() => Int)
    minBonusVitality: number;

    @Column({ type: 'int' })
    @Field(() => Int)
    maxBonusVitality: number;

    @OneToMany(
        () => Weapon,
        weapon => weapon.weaponType
    )
    instances?: Weapon[];
}
