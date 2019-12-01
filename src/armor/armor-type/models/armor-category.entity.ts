import { registerEnumType } from 'type-graphql';

export enum ArmorCategory {
    LIGTH = 'light',
    MEDIUM = 'medium',
    HEAVY = 'heavy',
}

registerEnumType(ArmorCategory, { name: 'ArmorCategory' });
