import { InputType, Field } from 'type-graphql';

@InputType()
export class CreateWeaponInput {
    @Field()
    weaponTypeId: string;
}
