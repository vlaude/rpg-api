import { Character } from 'src/character/models/character.entity';
import { Weapon } from 'src/weapon/weapon/models/weapon.entity';
import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@Entity()
@ObjectType()
export class Equipment {
    @PrimaryGeneratedColumn()
    @Field(type => ID)
    id: string;

    @OneToOne(type => Character)
    @Field(type => Character)
    character: Character;

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
