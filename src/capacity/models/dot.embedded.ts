import { Column } from 'typeorm';

export class Dot {
    @Column({ type: 'int' })
    minDamage: number;

    @Column({ type: 'int' })
    maxDamage: number;

    @Column({ type: 'int' })
    turnsNumber: number;
}
