import { PrimaryGeneratedColumn, ManyToOne, In, Column, Entity } from 'typeorm';
import { Field, ID, Int, ObjectType } from 'type-graphql';
import { Inventory } from 'src/character/inventory/models/inventory.entity';
import { IItem } from 'src/item/item/models/item.interface';
import { ArmorType } from '../../armor-type/models/armor-type.entity';
import { ArmorCategory } from '../../armor-type/models/armor-category.entity';
import { ArmorPosition } from '../../armor-type/models/armor-position.enum';

@Entity()
@ObjectType({ implements: IItem })
export class Armor implements IItem {
    @PrimaryGeneratedColumn()
    id: string;

    name: string;

    description?: string;

    @ManyToOne(
        type => ArmorType,
        armorType => armorType.instances,
        { eager: true }
    )
    @Field(type => ArmorType)
    type: ArmorType;

    @ManyToOne(
        type => Inventory,
        inventory => inventory.items,
        { eager: true }
    )
    inventory: Inventory;

    @Field(type => ArmorCategory)
    category: ArmorCategory;

    @Field(type => ArmorPosition)
    position: ArmorPosition;

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
