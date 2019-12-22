import { InputType, Field } from 'type-graphql';

@InputType()
export class AddItemInput {
    @Field()
    characterId: string;

    @Field()
    itemId: string;
}
