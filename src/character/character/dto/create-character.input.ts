import { InputType, Field } from 'type-graphql';

@InputType()
export class CreateCharacterInput {
    @Field()
    name: string;

    @Field()
    raceId: string;
}
