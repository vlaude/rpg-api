import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UserInputError } from 'apollo-server-errors';
import { Equipment } from './models/equipment.entity';
import { Character } from '../character/models/character.entity';
import { EquipWeaponInput } from './dto/equip-weapon.input';
import { EquipmentService } from './equipment.service';
import { CharacterService } from '../character/character.service';
import { WeaponService } from 'src/item/weapon/weapon/weapon.service';

@Resolver(of => Equipment)
export class EquipmentResolver {
    constructor(
        private readonly equipmentService: EquipmentService,
        private readonly characterService: CharacterService,
        private readonly weaponService: WeaponService
    ) {}

    // TODO Verification if weapon is not already equiped by someone else
    @Mutation(returns => Character)
    async equipWeapon(@Args('equipWeaponData') equipWeaponData: EquipWeaponInput): Promise<Equipment> {
        const character = await this.characterService.findOneById(equipWeaponData.characterId);
        if (!character) {
            throw new UserInputError(`No character found for id ${equipWeaponData.characterId}`);
        }
        const weapon = await this.weaponService.findOneById(equipWeaponData.weaponId);
        if (!weapon) {
            throw new UserInputError(`No weapon found for id ${equipWeaponData.weaponId}`);
        }
        return await this.equipmentService.equipWeapon(character, weapon);
    }
}
