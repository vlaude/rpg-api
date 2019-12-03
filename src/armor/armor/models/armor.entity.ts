import { ArmorType } from 'src/armor/armor-type/models/armor-type.entity';
import { ArmorCategory } from 'src/armor/armor-type/models/armor-category.entity';
import { ArmorPosition } from 'src/armor/armor-type/models/armor-position.enum';
import { PrimaryGeneratedColumn, ManyToOne, In, Column, Entity } from 'typeorm';
import { Field, ID, Int, ObjectType } from 'type-graphql';

@Entity()
@ObjectType()
export class Armor {
    @PrimaryGeneratedColumn()
    @Field(type => ID)
    id: string;

    @ManyToOne(
        type => ArmorType,
        armorType => armorType.instances,
        { eager: true }
    )
    @Field(type => ArmorType)
    type: ArmorType;

    @Field()
    name: string;

    @Field(type => ArmorCategory)
    category: ArmorCategory;

    @Field(type => ArmorPosition)
    position: ArmorPosition;

    @Field({ nullable: true })
    description?: string;

    @Field(type => Int)
    physicArmor: number;

    @Field(type => Int)
    magicArmor: number;

    @Column({ type: 'int' })
    @Field(type => Int)
    bonusStrength: number;

    @Column({ type: 'int' })
    @Field(type => Int)
    bonusDexterity: number;

    @Column({ type: 'int' })
    @Field(type => Int)
    bonusIntelligence: number;

    @Column({ type: 'int' })
    @Field(type => Int)
    bonusVitality: number;
}
