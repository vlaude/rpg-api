import { Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { Armor } from 'src/item/armor/armor/models/armor.entity';
import { Weapon } from 'src/item/weapon/weapon/models/weapon.entity';
import { IItem } from 'src/item/item/models/item.interface';

@Entity()
@ObjectType()
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
}
