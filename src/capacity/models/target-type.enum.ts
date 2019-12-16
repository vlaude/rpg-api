import { registerEnumType } from 'type-graphql';

export enum TargetType {
    ENEMIE_MONO_TARGET = 'enemie_mono_target',
    ENEMIE_MULTI_TARGET = 'enemie_multi_target',
    ALLY_MONO_TARGET = 'ally_mono_target',
    ALLY_MULTI_TARGET = 'ally_multi_target',
}

registerEnumType(TargetType, { name: 'TargetType' });
