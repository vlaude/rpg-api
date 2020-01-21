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
    @Field(() => ID)
    id: string;

    @Column({ unique: true })
    @Field()
    name: string;

    // TODO Return calculated Stats with character level, class and equipment.
    @Field(() => Int, { nullable: true })
    strength?: number;

    @Field(() => Int, { nullable: true })
    dexterity?: number;

    @Field(() => Int, { nullable: true })
    intelligence?: number;

    @Field(() => Int, { nullable: true })
    vitality?: number;

    @OneToOne(() => Equipment, { cascade: true, eager: true })
    @JoinColumn()
    @Field(() => Equipment)
    equipment: Equipment;

    @OneToOne(() => Inventory, { cascade: true, eager: true })
    @JoinColumn()
    @Field(() => Inventory)
    inventory: Inventory;

    @ManyToOne(() => Race, { nullable: false, eager: true })
    @Field()
    race: Race;

    @ManyToOne(
        () => User,
        user => user.characters
    )
    player: User;
}
