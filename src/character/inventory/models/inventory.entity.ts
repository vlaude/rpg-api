import { Entity, PrimaryGeneratedColumn, OneToMany, Column } from 'typeorm';
import { ObjectType, Field, ID, Int } from 'type-graphql';
import { Armor } from 'src/item/armor/armor/models/armor.entity';
import { Weapon } from 'src/item/weapon/weapon/models/weapon.entity';
import { IItem } from 'src/item/item/models/item.interface';

@Entity()
@ObjectType()
// TODO Delete cascade with Character
export class Inventory {
    @PrimaryGeneratedColumn()
    @Field(type => ID)
    id: string;

    @OneToMany(
        type => Armor || Weapon,
        item => item.inventory
    )
    @Field(type => IItem)
    items: IItem[];

    @Column({ type: 'int', default: 10 })
    @Field(type => Int)
    golds: number;

    @Column({ type: 'int', default: 10 })
    @Field(type => Int)
    capacity: number;
}
