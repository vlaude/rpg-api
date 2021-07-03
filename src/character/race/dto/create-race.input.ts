import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class CreateRaceInput {
    @Field()
    name: string;

    @Field({ nullable: true })
    description?: string;

    @Field(() => Int)
    base_strength: number;

    @Field(() => Int)
    base_dexterity: number;

    @Field(() => Int)
    base_intelligence: number;

    @Field(() => Int)
    base_vitality: number;
}
