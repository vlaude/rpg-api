import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Field, Int, ObjectType, ID } from 'type-graphql';
import { ArmorCategory } from './armor-category.entity';
import { Armor } from '../../armor/models/armor.entity';
import { EquipmentPosition } from 'src/character/equipment/models/equipment-position.enum';

@Entity()
@ObjectType()
export class ArmorType {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: string;

    @Column({ unique: true })
    @Field()
    name: string;

    // TODO Constraint on position
    @Column({ type: 'enum', enum: EquipmentPosition })
    @Field(() => EquipmentPosition)
    equipmentPosition: EquipmentPosition;

    @Column({ type: 'enum', enum: ArmorCategory })
    @Field(() => ArmorCategory)
    category: ArmorCategory;

    @Column({ type: 'text', nullable: true })
    @Field({ nullable: true })
    description?: string;

    @Column({ type: 'int' })
    @Field(() => Int)
    physicArmor: number;

    @Column({ type: 'int' })
    @Field(() => Int)
    magicArmor: number;

    @Column({ type: 'int' })
    @Field(() => Int)
    minBonusStrength: number;

    @Column({ type: 'int' })
    @Field(() => Int)
    maxBonusStrength: number;

    @Column({ type: 'int' })
    @Field(() => Int)
    minBonusDexterity: number;

    @Column({ type: 'int' })
    @Field(() => Int)
    maxBonusDexterity: number;

    @Column({ type: 'int' })
    @Field(() => Int)
    minBonusIntelligence: number;

    @Column({ type: 'int' })
    @Field(() => Int)
    maxBonusIntelligence: number;

    @Column({ type: 'int' })
    @Field(() => Int)
    minBonusVitality: number;

    @Column({ type: 'int' })
    @Field(() => Int)
    maxBonusVitality: number;

    @OneToMany(
        () => Armor,
        armor => armor.armorType
    )
    instances?: Armor[];
}
