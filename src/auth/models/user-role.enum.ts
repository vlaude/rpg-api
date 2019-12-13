import { registerEnumType } from 'type-graphql';

export enum UserRole {
    USER = 'USER',
    MJ = 'MJ',
    ADMIN = 'ADMIN',
    GOD = 'GOD',
}

registerEnumType(UserRole, { name: 'UserRole' });
