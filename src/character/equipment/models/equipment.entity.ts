import { Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { Item } from 'src/item/item/models/item.entity';

@Entity()
@ObjectType()
// TODO Delete cascade with Character
export class Equipment {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: string;

    @OneToMany(
        () => Item,
        equipable => equipable.equipment,
        { eager: true }
    )
    @Field(() => [Item])
    equipmentPieces: Item[];
}
