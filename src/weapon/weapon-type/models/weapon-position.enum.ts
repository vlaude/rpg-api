import { registerEnumType } from 'type-graphql';

export enum WeaponPostion {
    TWO_HANDED = 'two_handed',
    HAND_RIGHT = 'hand_right',
    HAND_LEFT = 'hand_left',
}

registerEnumType(WeaponPostion, { name: 'WeaponPosition' });
