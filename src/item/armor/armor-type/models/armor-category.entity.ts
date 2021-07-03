import { registerEnumType } from 'type-graphql';

export enum ArmorCategory {
    // TODO typo error
    LIGTH = 'light',
    MEDIUM = 'medium',
    HEAVY = 'heavy',
}

registerEnumType(ArmorCategory, { name: 'ArmorCategory' });
