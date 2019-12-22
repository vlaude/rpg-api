import { registerEnumType } from 'type-graphql';

export enum EffectType {
    MADNESS = 'madness',
    BLEEDING = 'bleeding',
    POISON = 'poison',
}

registerEnumType(EffectType, { name: 'EffectType' });
