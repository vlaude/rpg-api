import { registerEnumType } from 'type-graphql';

export enum AddItemType {
    ITEM,
    ARMOR,
    WEAPON,
}

registerEnumType(AddItemType, { name: 'AddItemType' });
