import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Field, Int, ObjectType, ID } from 'type-graphql';
import { ArmorPosition } from './armor-position.enum';
import { ArmorCategory } from './armor-category.entity';
import { Armor } from '../../armor/models/armor.entity';

@Entity()
@ObjectType()
export class ArmorType {
    @PrimaryGeneratedColumn()
    @Field(type => ID)
    id: string;

    @Column({ unique: true })
    @Field()
    name: string;

    @Column({ type: 'enum', enum: ArmorCategory })
    @Field(type => ArmorCategory)
    category: ArmorCategory;

    @Column({ type: 'enum', enum: ArmorPosition })
    @Field(type => ArmorPosition)
    position: ArmorPosition;

    @Column({ type: 'text', nullable: true })
    @Field({ nullable: true })
    description?: string;

    @Column({ type: 'int' })
    @Field(type => Int)
    physicArmor: number;

    @Column({ type: 'int' })
    @Field(type => Int)
    magicArmor: number;

    @Column({ type: 'int' })
    @Field(type => Int)
    minBonusStrength: number;

    @Column({ type: 'int' })
    @Field(type => Int)
    maxBonusStrength: number;

    @Column({ type: 'int' })
    @Field(type => Int)
    minBonusDexterity: number;

    @Column({ type: 'int' })
    @Field(type => Int)
    maxBonusDexterity: number;

    @Column({ type: 'int' })
    @Field(type => Int)
    minBonusIntelligence: number;

    @Column({ type: 'int' })
    @Field(type => Int)
    maxBonusIntelligence: number;

    @Column({ type: 'int' })
    @Field(type => Int)
    minBonusVitality: number;

    @Column({ type: 'int' })
    @Field(type => Int)
    maxBonusVitality: number;

    @OneToMany(
        type => Armor,
        armor => armor.type
    )
    instances?: Armor[];
}
