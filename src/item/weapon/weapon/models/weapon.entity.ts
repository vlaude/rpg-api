import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { ObjectType, Field, ID, Int } from 'type-graphql';
import { Inventory } from 'src/character/inventory/models/inventory.entity';
import { IItem } from 'src/item/item/models/item.interface';
import { WeaponType } from '../../weapon-type/models/weapon-type.entity';
import { WeaponCategory } from '../../weapon-type/models/weapon-category.enum';
import { DamageType } from '../../weapon-type/models/damage-type.enum';
import { WeaponPostion } from '../../weapon-type/models/weapon-position.enum';

@Entity()
@ObjectType({ implements: IItem })
export class Weapon implements IItem {
    @PrimaryGeneratedColumn()
    id: string;

    name: string;

    description?: string;

    @ManyToOne(
        type => WeaponType,
        weaponType => weaponType.instances,
        { eager: true }
    )
    @Field(type => WeaponType)
    type: WeaponType;

    @ManyToOne(
        type => Inventory,
        inventory => inventory.items,
        { eager: true }
    )
    inventory: Inventory;

    @Field(type => WeaponCategory)
    category: WeaponCategory;

    @Field(type => DamageType)
    damageType: DamageType;

    @Field(type => WeaponPostion)
    position: WeaponPostion;

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
