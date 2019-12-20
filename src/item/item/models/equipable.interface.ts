import { InterfaceType, Field } from 'type-graphql';
import { EquipmentPosition } from 'src/character/equipment/models/equipment-position.enum';
import { Armor } from 'src/item/armor/armor/models/armor.entity';
import { Weapon } from 'src/item/weapon/weapon/models/weapon.entity';
import { Logger } from '@nestjs/common';
import { ArmorType } from 'src/item/armor/armor-type/models/armor-type.entity';

@InterfaceType({
    resolveType: value => {
        return value;
    },
})
export abstract class IEquipable {
    @Field(type => EquipmentPosition)
    position: EquipmentPosition;
}
