import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UserInputError } from 'apollo-server-errors';
import { Equipment } from './models/equipment.entity';
import { Character } from '../character/models/character.entity';
import { EquipWeaponInput } from './dto/equip-weapon.input';
import { EquipmentService } from './equipment.service';
import { CharacterService } from '../character/character.service';
import { WeaponService } from 'src/item/weapon/weapon/weapon.service';
import { EquipArmorInput } from './dto/equip-armor.input';
import { Logger } from '@nestjs/common';
import { ArmorService } from 'src/item/armor/armor/armor.service';

@Resolver(of => Equipment)
export class EquipmentResolver {
    constructor(
        private readonly equipmentService: EquipmentService,
        private readonly characterService: CharacterService,
        private readonly weaponService: WeaponService,
        private readonly armorService: ArmorService
    ) {}

    // TODO Verification if weapon is in inventory
    // @Mutation(returns => Character)
    // async equipWeapon(@Args('equipWeaponData') equipWeaponData: EquipWeaponInput): Promise<Equipment> {
    //     const character = await this.characterService.findOneById(equipWeaponData.characterId);
    //     if (!character) {
    //         throw new UserInputError(`No character found for id ${equipWeaponData.characterId}`);
    //     }
    //     const weapon = await this.weaponService.findOneById(equipWeaponData.weaponId);
    //     if (!weapon) {
    //         throw new UserInputError(`No weapon found for id ${equipWeaponData.weaponId}`);
    //     }
    //     return await this.equipmentService.equipWeapon(character, weapon);
    // }

    // @Mutation(returns => Equipment, { nullable: true })
    // async equipArmor(@Args('equipArmorData') equipArmorData: EquipArmorInput) {
    //     const character = await this.characterService.findOneById(equipArmorData.characterId);
    //     if (!character) {
    //         throw new UserInputError(`No character found for id ${equipArmorData.characterId}`);
    //     }
    //     const armor = await this.armorService.findOneById(equipArmorData.armorId);
    //     if (!armor) {
    //         throw new UserInputError(`No weapon found for id ${equipArmorData.armorId}`);
    //     }
    //
    //     if (character.inventory.id !== armor.inventory?.id) {
    //         throw new UserInputError(`Armor ${armor.id} is not in the inventory of Character ${character.id}`);
    //     }
    //
    //     if (character.equipment[armor.type.position]) {
    //         Logger.debug('ya déjà un truc là');
    //     }
    //
    //     return this.equipmentService.equipArmor(character, armor);
    // }
}
