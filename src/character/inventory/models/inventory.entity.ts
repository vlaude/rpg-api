import { Entity, PrimaryGeneratedColumn, OneToMany, Column } from 'typeorm';
import { ObjectType, Field, ID, Int } from 'type-graphql';
import { Item } from 'src/item/item/models/item.entity';

@Entity()
@ObjectType()
// TODO Delete cascade with Character
export class Inventory {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: string;

    @OneToMany(
        () => Item,
        item => item.inventory,
        { eager: true }
    )
    items: Item[];

    @Column({ type: 'int', default: 10 })
    @Field(() => Int)
    golds: number;

    @Column({ type: 'int', default: 10 })
    @Field(() => Int)
    capacity: number;
}
