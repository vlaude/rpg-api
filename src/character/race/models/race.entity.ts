import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { ObjectType, Field, ID, Int } from 'type-graphql';
import { Character } from 'src/character/character/models/character.entity';
import { Class } from 'src/character/class/models/class.entity';

@Entity()
@ObjectType()
export class Race {
    @PrimaryGeneratedColumn()
    @Field(type => ID)
    id: string;

    @Column({ unique: true })
    @Field()
    name: string;

    @Column({ type: 'text', nullable: true })
    @Field({ nullable: true })
    description: string;

    @Column({ type: 'int' })
    @Field(type => Int)
    base_strength: number;

    @Column({ type: 'int' })
    @Field(type => Int)
    base_dexterity: number;

    @Column({ type: 'int' })
    @Field(type => Int)
    base_intelligence: number;

    @Column({ type: 'int' })
    @Field(type => Int)
    base_vitality: number;

    @ManyToMany(
        type => Class,
        c => c.compatibleRaces,
        { cascade: true }
    )
    @JoinTable()
    availableClasses: Class[];
}
