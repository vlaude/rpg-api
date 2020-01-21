import { Race } from 'src/character/race/models/race.entity';
import { WeaponCategoryBonus } from './weapon-category-bonus.embedded';
import { StatisticBonus } from './statistic-bonus.embedded';
import { Passive } from './passive.embedded';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { Insensibility } from 'src/character/race/models/insensibility.embedded';

@Entity()
@ObjectType()
export class Class {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: string;

    @Column({ unique: true })
    @Field()
    name: string;

    @Column({ type: 'text', nullable: true })
    @Field({ nullable: true })
    description?: string;

    @Column(() => WeaponCategoryBonus)
    @Field(() => WeaponCategoryBonus)
    weaponCategoryBonus?: WeaponCategoryBonus;

    @Column(() => StatisticBonus)
    @Field(() => StatisticBonus)
    statBonus?: StatisticBonus;

    @Column(() => Insensibility)
    @Field(() => Insensibility)
    insensibility: Insensibility;

    @Column(() => Passive)
    @Field(() => Passive)
    passive?: Passive;

    @ManyToMany(
        () => Race,
        race => race.availableClasses
    )
    @Field(() => [Race])
    compatibleRaces: Race[];
}
