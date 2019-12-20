import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { Character } from 'src/character/character/models/character.entity';
import { IEquipable } from 'src/item/item/models/equipable.interface';
import { Weapon } from 'src/item/weapon/weapon/models/weapon.entity';
import { Armor } from 'src/item/armor/armor/models/armor.entity';

@Entity()
@ObjectType()
// TODO Delete cascade with Character
export class Equipment {
    @PrimaryGeneratedColumn()
    @Field(type => ID)
    id: string;

    // TODO Add constraint to validate the weapon position.
    @OneToOne(type => Weapon, { eager: true })
    @JoinColumn()
    @Field(type => IEquipable, { nullable: true })
    handRight?: IEquipable;

    @OneToOne(type => Weapon, { eager: true })
    @JoinColumn()
    @Field(type => IEquipable, { nullable: true })
    handLeft?: IEquipable;

    @OneToOne(type => Weapon, { eager: true })
    @JoinColumn()
    @Field(type => IEquipable, { nullable: true })
    twoHanded?: IEquipable;

    // TODO Add constraint to validate the armor position.
    @OneToOne(type => Armor, { eager: true })
    @JoinColumn()
    @Field(type => IEquipable, { nullable: true })
    head?: IEquipable;

    @OneToOne(type => Armor, { eager: true })
    @JoinColumn()
    @Field(type => IEquipable, { nullable: true })
    chest?: IEquipable;

    @OneToOne(type => Armor, { eager: true })
    @JoinColumn()
    @Field(type => IEquipable, { nullable: true })
    shoulders?: IEquipable;

    @OneToOne(type => Armor, { eager: true })
    @JoinColumn()
    @Field(type => IEquipable, { nullable: true })
    greaves?: IEquipable;

    @OneToOne(type => Armor, { eager: true })
    @JoinColumn()
    @Field(type => IEquipable, { nullable: true })
    boots?: IEquipable;

    @OneToOne(type => Armor, { eager: true })
    @JoinColumn()
    @Field(type => IEquipable, { nullable: true })
    gloves?: IEquipable;
}
