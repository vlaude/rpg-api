import { ManyToOne, Column, ChildEntity } from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';
import { ArmorType } from '../../armor-type/models/armor-type.entity';
import { ArmorCategory } from '../../armor-type/models/armor-category.entity';
import { Item } from 'src/item/item/models/item.entity';

@ChildEntity()
@ObjectType({ implements: Item })
export class Armor extends Item {
    name: string;

    description?: string;

    @ManyToOne(
        () => ArmorType,
        armorType => armorType.instances,
        { eager: true }
    )
    @Field(() => ArmorType)
    armorType: ArmorType;

    @Field(() => ArmorCategory)
    category: ArmorCategory;

    @Field(() => Int)
    physicArmor: number;

    @Field(() => Int)
    magicArmor: number;

    @Column({ type: 'int' })
    @Field(() => Int)
    bonusStrength: number;

    @Column({ type: 'int' })
    @Field(() => Int)
    bonusDexterity: number;

    @Column({ type: 'int' })
    @Field(() => Int)
    bonusIntelligence: number;

    @Column({ type: 'int' })
    @Field(() => Int)
    bonusVitality: number;
}
