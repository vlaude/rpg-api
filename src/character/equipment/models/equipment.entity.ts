import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { Item } from 'src/item/item/models/item.entity';

@Entity()
@ObjectType()
// TODO Delete cascade with Character
export class Equipment {
    @PrimaryGeneratedColumn()
    @Field(type => ID)
    id: string;

    @OneToMany(
        type => Item,
        equipable => equipable.equipment,
        { eager: true }
    )
    @Field(type => [Item])
    equipmentPieces: Item[];
}
