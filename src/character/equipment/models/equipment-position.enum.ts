import { registerEnumType } from 'type-graphql';

export enum EquipmentPosition {
    TWO_HANDED = 'twoHanded',
    HAND_RIGHT = 'handRight',
    HAND_LEFT = 'handLeft',
    HEAD = 'head',
    CHEST = 'chest',
    SHOULDERS = 'shoulders',
    GLOVES = 'gloves',
    GREAVES = 'greaves',
    BOOTS = 'boots',
}

registerEnumType(EquipmentPosition, { name: 'EquipmentPosition' });
