import { ObjectType, Field, ID, Int } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
@ObjectType()
export class Character {
    @PrimaryGeneratedColumn()
    @Field(type => ID)
    id: string;

    @Column()
    @Field()
    name: string;

    @Column('int')
    @Field(type => Int)
    strength: number;

    @Column('int')
    @Field(type => Int)
    dexterity: number;

    @Column('int')
    @Field(type => Int)
    intelligence: number;

    @Column('int')
    @Field(type => Int)
    vitality: number;
}
