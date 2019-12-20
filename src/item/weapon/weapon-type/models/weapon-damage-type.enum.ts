import { registerEnumType } from 'type-graphql';

export enum WeaponDamageType {
    MELEE_PHYSICAL = 'melee_physical',
    MELEE_MAGIC = 'melee_magic',
    DISTANCE_PHYSICAL = 'distance_physical',
    DISTANCE_MAGIC = 'distance_magic',
}

registerEnumType(WeaponDamageType, { name: 'WeaponDamageType' });
