import { registerEnumType } from 'type-graphql';

export enum WeaponCategory {
    SWORD = 'sword',
    AXE = 'axe',
    MACE = 'mace',
    BOW = 'bow',
    WAND = 'wand',
    STAFF = 'staff',
    SHIELD = 'shield',
}

registerEnumType(WeaponCategory, { name: 'WeaponCategory' });
