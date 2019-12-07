import { Weapon } from 'src/weapon/weapon/models/weapon.entity';
import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { Character } from 'src/character/character/models/character.entity';

@Entity()
@ObjectType()
export class Equipment {
    @PrimaryGeneratedColumn()
    @Field(type => ID)
    id: string;

    @OneToOne(type => Weapon, { eager: true })
    @JoinColumn()
    @Field(type => Weapon, { nullable: true })
    handRight?: Weapon;

    @OneToOne(type => Weapon, { eager: true })
    @JoinColumn()
    @Field(type => Weapon, { nullable: true })
    handLeft?: Weapon;

    @OneToOne(type => Weapon, { eager: true })
    @JoinColumn()
    @Field(type => Weapon, { nullable: true })
    twoHanded?: Weapon;
}
