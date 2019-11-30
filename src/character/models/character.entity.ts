import { ObjectType, Field, ID, Int } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Equipment } from '../equipment/models/equipment.entity';

@Entity()
@ObjectType()
export class Character {
    @PrimaryGeneratedColumn()
    @Field(type => ID)
    id: string;

    @Column({ unique: true })
    @Field()
    name: string;

    @Column({ type: 'int', default: 10 })
    @Field(type => Int)
    strength: number;

    @Column({ type: 'int', default: 10 })
    @Field(type => Int)
    dexterity: number;

    @Column({ type: 'int', default: 10 })
    @Field(type => Int)
    intelligence: number;

    @Column({ type: 'int', default: 100 })
    @Field(type => Int)
    vitality: number;

    @OneToOne(type => Equipment, { cascade: true, eager: true })
    @JoinColumn()
    @Field(type => Equipment)
    equipment: Equipment;
}
