import { registerEnumType } from 'type-graphql';

export enum ArmorPosition {
    HEAD = 'head',
    CHEST = 'chest',
    SHOULDERS = 'shoulders',
    GREAVES = 'greaves',
    BOOTS = 'boots',
    GLOVES = 'gloves',
}

registerEnumType(ArmorPosition, { name: 'ArmorPosition' });
