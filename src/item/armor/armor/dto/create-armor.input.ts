import { InputType, Field } from 'type-graphql';

@InputType()
export class CreateArmorInput {
    @Field()
    armorTypeId: string;
}
