import { InputType, Field, Int } from 'type-graphql';
import { ICapacity } from './create-capacity.interface';

@InputType()
export class CreateSkillInput extends ICapacity {
    @Field(type => Int)
    staminaCost: number;
}
