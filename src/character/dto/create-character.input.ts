import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class CreateCharacterInput {
    @Field()
    name: string;

    @Field(type => Int, { nullable: true })
    strength?: number;

    @Field(type => Int, { nullable: true })
    dexterity?: number;

    @Field(type => Int, { nullable: true })
    intelligence?: number;

    @Field(type => Int, { nullable: true })
    vitality?: number;
}
