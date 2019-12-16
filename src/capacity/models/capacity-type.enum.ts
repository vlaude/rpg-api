import { registerEnumType } from 'type-graphql';

export enum CapacityType {
    SKILL = 'skill',
    SPELL = 'spell',
}

registerEnumType(CapacityType, { name: 'CapacityType' });
