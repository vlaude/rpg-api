import { Capacity } from './capacity.entity';
import { ChildEntity, Column } from 'typeorm';

@ChildEntity()
export class Spell extends Capacity {
    @Column({ type: 'int' })
    manaCost: number;
}
