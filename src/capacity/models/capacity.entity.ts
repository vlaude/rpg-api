import { Entity, TableInheritance, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { DamageType } from 'src/item/weapon/weapon-type/models/damage-type.enum';
import { TargetType } from './target-type.enum';
import { Race } from 'src/character/race/models/race.entity';
import { CapacityType } from './capacity-type.enum';
import { AdditionnalEffect } from './additionnal-effect.embedded';
import { Dot } from './dot.embedded';
import { StatAlteration } from './stat-alteration.embedded';

@Entity()
@TableInheritance({ column: { type: 'enum', enum: CapacityType, name: 'type' } })
export class Capacity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ unique: true })
    name: string;

    @Column({ type: 'text' })
    description: string;

    @Column({ type: 'int', default: 0 })
    healthCost: number;

    @Column({ type: 'enum', enum: DamageType })
    damageType: DamageType;

    @Column({ type: 'enum', enum: TargetType, default: TargetType.ENEMIE_MONO_TARGET })
    targetType: TargetType;

    @Column({ type: 'boolean', default: false })
    needInitiative: boolean;

    @Column({ type: 'boolean', default: false })
    giveInitiative: boolean;

    @Column({ type: 'boolean' })
    counterSpell: boolean;

    @Column({ type: 'boolean' })
    counterSkill: boolean;

    @Column({ type: 'int', default: 1 })
    levelRequired: number;

    @Column({ nullable: true })
    classRequired: string;

    @ManyToOne(type => Race, { nullable: true })
    raceRequired: Race;

    @Column({ type: 'int' })
    cooldown: number;

    @Column(type => StatAlteration)
    statAlteration: StatAlteration;

    @Column(type => AdditionnalEffect)
    additionnalEffect: AdditionnalEffect;

    @Column(type => Dot)
    dot: Dot;
}
