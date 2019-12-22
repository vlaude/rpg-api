import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, ChildEntity } from 'typeorm';
import { ObjectType, Field, ID, Int } from 'type-graphql';
import { Inventory } from 'src/character/inventory/models/inventory.entity';
import { WeaponType } from '../../weapon-type/models/weapon-type.entity';
import { WeaponCategory } from '../../weapon-type/models/weapon-category.enum';
import { EquipmentPosition } from 'src/character/equipment/models/equipment-position.enum';
import { WeaponDamageType } from '../../weapon-type/models/weapon-damage-type.enum';
import { Item } from 'src/item/item/models/item.entity';
import { Equipment } from 'src/character/equipment/models/equipment.entity';

@ChildEntity()
@ObjectType({ implements: Item })
export class Weapon extends Item {
    name: string;

    description?: string;

    @ManyToOne(
        type => WeaponType,
        weaponType => weaponType.instances,
        { eager: true }
    )
    @Field(type => WeaponType)
    weaponType: WeaponType;

    @Field(type => WeaponCategory)
    category: WeaponCategory;

    @Field(type => WeaponDamageType)
    damageType: WeaponDamageType;

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
