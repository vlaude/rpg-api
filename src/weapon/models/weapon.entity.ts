import { WeaponType } from './weapon-type.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { ObjectType, Field, ID, Int } from 'type-graphql';

@Entity()
@ObjectType()
export class Weapon {
    @PrimaryGeneratedColumn()
    @Field(type => ID)
    id: string;

    @ManyToOne(
        type => WeaponType,
        weaponType => weaponType.instances
    )
    @Field(type => WeaponType)
    type: WeaponType;

    @Column({ type: 'int' })
    @Field(type => Int)
    bonusStrength: number;

    @Column({ type: 'int' })
    @Field(type => Int)
    bonusDexterity: number;

    @Column({ type: 'int' })
    @Field(type => Int)
    bonusIntelligence: number;

    @Column({ type: 'int' })
    @Field(type => Int)
    bonusVitality: number;
}
