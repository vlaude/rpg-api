import { InputType, Field } from 'type-graphql';

@InputType()
export class EquipArmorInput {
    @Field()
    characterId: string;

    @Field()
    armorId: string;
}
