import { registerEnumType } from 'type-graphql';

export enum DamageType {
    MELEE_PHYSICAL = 'melee_physical',
    MELEE_MAGIC = 'melee_magic',
    DISTANCE_PHYSICAL = 'distance_physical',
    DISTANCE_MAGIC = 'distance_magic',
}

registerEnumType(DamageType, { name: 'DamageType' });
