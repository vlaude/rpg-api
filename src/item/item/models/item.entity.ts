import { InterfaceType, ID, Field } from 'type-graphql';
import { PrimaryGeneratedColumn, Column, ManyToOne, Entity, TableInheritance } from 'typeorm';
import { Inventory } from 'src/character/inventory/models/inventory.entity';
import { Equipment } from 'src/character/equipment/models/equipment.entity';
import { EquipmentPosition } from 'src/character/equipment/models/equipment-position.enum';

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'itemType' } })
@InterfaceType()
export abstract class Item {
    @PrimaryGeneratedColumn()
    @Field(type => ID)
    id: string;

    @Field()
    name: string;

    @Field()
    description?: string;

    // TODO Embedded equipable
    @Column({ type: 'boolean' })
    @Field(type => Boolean)
    equipable: boolean;

    // TODO Add constraint to check if item is equipable
    @ManyToOne(
        type => Equipment,
        equipment => equipment.equipmentPieces
    )
    equipment: Equipment;

    @Column({ type: 'enum', enum: EquipmentPosition, nullable: true })
    @Field(type => EquipmentPosition, { nullable: true })
    equipmentPosition: EquipmentPosition;

    @ManyToOne(
        type => Inventory,
        inventory => inventory.items
    )
    inventory: Inventory;
}
