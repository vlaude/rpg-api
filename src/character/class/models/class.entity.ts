import { Race } from 'src/character/race/models/race.entity';
import { WeaponCategoryBonus } from './weapon-category-bonus.embedded';
import { StatisticBonus } from './statistic-bonus.embedded';
import { Passive } from './passive.embedded';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { Insensibility } from 'src/character/race/models/insensibility.embedded';

@Entity()
@ObjectType()
export class Class {
    @PrimaryGeneratedColumn()
    @Field(type => ID)
    id: string;

    @Column({ unique: true })
    @Field()
    name: string;

    @Column({ type: 'text', nullable: true })
    @Field({ nullable: true })
    description?: string;

    @Column(type => WeaponCategoryBonus)
    @Field(type => WeaponCategoryBonus)
    weaponCategoryBonus?: WeaponCategoryBonus;

    @Column(type => StatisticBonus)
    @Field(type => StatisticBonus)
    statBonus?: StatisticBonus;

    @Column(type => Insensibility)
    @Field(type => Insensibility)
    insensibility: Insensibility;

    @Column(type => Passive)
    @Field(type => Passive)
    passive?: Passive;

    @ManyToMany(
        type => Race,
        race => race.availableClasses
    )
    @Field(type => [Race])
    compatibleRaces: Race[];
}
