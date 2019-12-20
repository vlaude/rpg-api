import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { ObjectType, Field, ID, Int } from 'type-graphql';
import { Inventory } from 'src/character/inventory/models/inventory.entity';
import { IItem } from 'src/item/item/models/item.interface';
import { WeaponType } from '../../weapon-type/models/weapon-type.entity';
import { WeaponCategory } from '../../weapon-type/models/weapon-category.enum';
import { IEquipable } from 'src/item/item/models/equipable.interface';
import { EquipmentPosition } from 'src/character/equipment/models/equipment-position.enum';
import { WeaponDamageType } from '../../weapon-type/models/weapon-damage-type.enum';

@Entity()
@ObjectType({ implements: [IEquipable, IItem] })
export class Weapon implements IEquipable, IItem {
    @PrimaryGeneratedColumn()
    id: string;

    name: string;

    description?: string;

    position: EquipmentPosition;

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
