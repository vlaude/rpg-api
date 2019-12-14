import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class CreateRaceInput {
    @Field()
    name: string;

    @Field({ nullable: true })
    description?: string;

    @Field(type => Int)
    base_strength: number;

    @Field(type => Int)
    base_dexterity: number;

    @Field(type => Int)
    base_intelligence: number;

    @Field(type => Int)
    base_vitality: number;
}
