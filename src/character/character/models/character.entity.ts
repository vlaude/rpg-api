import { ObjectType, Field, ID, Int } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Equipment } from 'src/character/equipment/models/equipment.entity';
import { Inventory } from 'src/character/inventory/models/inventory.entity';
import { User } from 'src/auth/models/user.entity';
import { Race } from 'src/character/race/models/race.entity';

@Entity()
@ObjectType()
export class Character {
    @PrimaryGeneratedColumn()
    @Field(type => ID)
    id: string;

    @Column({ unique: true })
    @Field()
    name: string;

    // TODO Return calculated Stats with character level, class and equipment.
    @Field(type => Int, { nullable: true })
    strength?: number;

    @Field(type => Int, { nullable: true })
    dexterity?: number;

    @Field(type => Int, { nullable: true })
    intelligence?: number;

    @Field(type => Int, { nullable: true })
    vitality?: number;

    @OneToOne(type => Equipment, { cascade: true, eager: true })
    @JoinColumn()
    @Field(type => Equipment)
    equipment: Equipment;

    @OneToOne(type => Inventory, { cascade: true, eager: true })
    @JoinColumn()
    @Field(type => Inventory)
    inventory: Inventory;

    @ManyToOne(type => Race, { nullable: false, eager: true })
    @Field()
    race: Race;

    @ManyToOne(
        type => User,
        user => user.characters
    )
    player: User;
}
