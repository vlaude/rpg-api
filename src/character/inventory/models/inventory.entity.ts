import { Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Armor } from 'src/armor/armor/models/armor.entity';
import { Weapon } from 'src/weapon/weapon/models/weapon.entity';
import { ObjectType, Field, ID } from 'type-graphql';
import { IItem } from 'src/item/models/item.interface';

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
