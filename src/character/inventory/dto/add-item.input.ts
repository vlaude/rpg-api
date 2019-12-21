import { InputType, Field } from 'type-graphql';
import { AddItemType } from './item-type.enum';

@InputType()
export class AddItemInput {
    @Field()
    characterId: string;

    @Field()
    itemId: string;
}
