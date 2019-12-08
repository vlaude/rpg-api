import { registerEnumType } from 'type-graphql';

export enum WeaponCategory {
    SWORD = 'sword',
    AXE = 'axe',
    MACE = 'mace',
    BOW = 'bow',
    WAND = 'wand',
    STAFF = 'staff',
}

registerEnumType(WeaponCategory, { name: 'WeaponCategory' });
