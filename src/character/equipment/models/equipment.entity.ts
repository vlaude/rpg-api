import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { Character } from 'src/character/character/models/character.entity';
import { Weapon } from 'src/item/weapon/weapon/models/weapon.entity';
import { Armor } from 'src/item/armor/armor/models/armor.entity';
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
