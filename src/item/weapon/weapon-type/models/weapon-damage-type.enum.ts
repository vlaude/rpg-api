import { registerEnumType } from 'type-graphql';

export enum WeaponDamageType {
    MELEE_PHYSICAL = 'melee_physical',
    MELEE_MAGICAL = 'melee_magic',
    DISTANCE_PHYSICAL = 'distance_physical',
    DISTANCE_MAGICAL = 'distance_magic',
}

registerEnumType(WeaponDamageType, { name: 'WeaponDamageType' });
