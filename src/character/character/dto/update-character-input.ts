import { InputType, Field } from 'type-graphql';

@InputType()
export class UpdateCharacterInput {
    @Field()
    id: string;

    @Field()
    name: string;
}
