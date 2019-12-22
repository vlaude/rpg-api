import { PrimaryGeneratedColumn, ManyToOne, In, Column, Entity, ChildEntity } from 'typeorm';
import { Field, ID, Int, ObjectType } from 'type-graphql';
import { Inventory } from 'src/character/inventory/models/inventory.entity';
import { ArmorType } from '../../armor-type/models/armor-type.entity';
import { ArmorCategory } from '../../armor-type/models/armor-category.entity';
import { EquipmentPosition } from 'src/character/equipment/models/equipment-position.enum';
import { Item } from 'src/item/item/models/item.entity';
import { Equipment } from 'src/character/equipment/models/equipment.entity';

@ChildEntity()
@ObjectType({ implements: Item })
export class Armor extends Item {
    name: string;

    description?: string;

    @ManyToOne(
        type => ArmorType,
        armorType => armorType.instances,
        { eager: true }
    )
    @Field(type => ArmorType)
    armorType: ArmorType;

    @Field(type => ArmorCategory)
    category: ArmorCategory;

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
