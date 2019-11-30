import { Field, InputType } from 'type-graphql';

@InputType()
export class EquipWeaponInput {
    @Field()
    characterId: string;

    @Field()
    weaponId: string;
}
