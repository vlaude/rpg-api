import { Entity, PrimaryGeneratedColumn, OneToMany, Column } from 'typeorm';
import { ObjectType, Field, ID, Int } from 'type-graphql';
import { Armor } from 'src/item/armor/armor/models/armor.entity';
import { Weapon } from 'src/item/weapon/weapon/models/weapon.entity';
import { Item } from 'src/item/item/models/item.entity';

@Entity()
@ObjectType()
// TODO Delete cascade with Character
export class Inventory {
    @PrimaryGeneratedColumn()
    @Field(type => ID)
    id: string;

    @OneToMany(
        type => Item,
        item => item.inventory,
        { eager: true }
    )
    items: Item[];

    @Column({ type: 'int', default: 10 })
    @Field(type => Int)
    golds: number;

    @Column({ type: 'int', default: 10 })
    @Field(type => Int)
    capacity: number;
}
