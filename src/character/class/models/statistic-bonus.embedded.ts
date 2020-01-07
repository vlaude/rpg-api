import { ObjectType, Field, Float, registerEnumType, InputType } from 'type-graphql';
import { Column } from 'typeorm';

// TODO Move this into shared enums
export enum Statistic {
    STRENGTH = 'strength',
    DEXTERITY = 'dexterity',
    INTELLIGENCE = 'intelligence',
    VITALITY = 'vitality',
}

registerEnumType(Statistic, { name: 'Statistic' });

@ObjectType()
@InputType('StatisticBonusInput')
export class StatisticBonus {
    @Column({ type: 'enum', enum: Statistic, nullable: true })
    @Field(type => Statistic, { nullable: true })
    stat: Statistic;

    @Column({ type: 'float', nullable: true })
    @Field(type => Float, { nullable: true })
    percentageBonus: number;
}
