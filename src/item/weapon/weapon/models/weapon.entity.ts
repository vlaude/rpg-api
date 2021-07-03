import { ManyToOne, Column, ChildEntity } from 'typeorm';
import { ObjectType, Field, Int } from 'type-graphql';
import { WeaponType } from '../../weapon-type/models/weapon-type.entity';
import { WeaponCategory } from '../../weapon-type/models/weapon-category.enum';
import { WeaponDamageType } from '../../weapon-type/models/weapon-damage-type.enum';
import { Item } from 'src/item/item/models/item.entity';

@ChildEntity()
@ObjectType({ implements: Item })
export class Weapon extends Item {
    name: string;

    description?: string;

    @ManyToOne(
        () => WeaponType,
        weaponType => weaponType.instances,
        { eager: true }
    )
    @Field(() => WeaponType)
    weaponType: WeaponType;

    @Field(() => WeaponCategory)
    category: WeaponCategory;

    @Field(() => WeaponDamageType)
    damageType: WeaponDamageType;

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
