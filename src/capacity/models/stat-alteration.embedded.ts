import { Column } from 'typeorm';

export enum StatAlterationType {
    BONUS = 'bonus',
    MALUS = 'malus',
}

export enum Statistic {
    STRENGTH = 'strength',
    DEXTERITY = 'dexterity',
    INTELLIGENCE = 'intelligence',
    VITALITY = 'vitality',
}

export class StatAlteration {
    @Column({ type: 'enum', enum: StatAlterationType })
    type: StatAlterationType;

    @Column({ type: 'enum', enum: Statistic })
    stat: Statistic;

    @Column({ type: 'int' })
    amount: number;

    @Column({ type: 'int' })
    turnsNumber: number;
}
