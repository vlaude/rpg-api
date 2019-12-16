import { EffectType } from './effect-type.enum';
import { Column } from 'typeorm';

export class AdditionnalEffect {
    @Column({ type: 'enum', enum: EffectType })
    effect: EffectType;

    @Column({ type: 'int' })
    minAmountEffect: number;

    @Column({ type: 'int' })
    maxAmountEffect: number;
}
