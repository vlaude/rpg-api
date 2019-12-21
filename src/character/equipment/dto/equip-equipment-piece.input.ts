import { Field, InputType } from 'type-graphql';

@InputType()
export class EquipEquipmentPieceInput {
    @Field()
    characterId: string;

    @Field()
    equipmentPieceId: string;
}
