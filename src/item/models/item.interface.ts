import { InterfaceType, ID, Field } from 'type-graphql';
import { PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Inventory } from 'src/character/inventory/models/inventory.entity';

@InterfaceType()
export abstract class IItem {
    @Field(type => ID)
    id: string;

    @Field()
    name: string;

    @Field({ nullable: true })
    description?: string;

    inventory: Inventory;
}
