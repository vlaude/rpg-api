import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCharacterInput } from './dto/create-character.input';
import { UpdateCharacterInput } from './dto/update-character-input';
import { Character } from './models/character.entity';
import { Weapon } from 'src/weapon/weapon/models/weapon.entity';
import { WeaponPostion } from '../weapon/weapon-type/models/weapon-position.enum';

@Injectable()
export class CharacterService {
    constructor(
        @InjectRepository(Character)
        private readonly characterRepository: Repository<Character>
    ) {}

    async findOneById(id: string): Promise<Character> {
        return this.characterRepository.findOne(id);
    }

    async findOneByName(name: string): Promise<Character> {
        return this.characterRepository.findOne({ where: { name } });
    }

    async findAll(): Promise<Character[]> {
        return this.characterRepository.find();
    }

    async create(createCharacterData: CreateCharacterInput): Promise<Character> {
        // Cascade will create Equipment automatically
        const createCharacter = {
            ...createCharacterData,
            equipment: {},
        };
        const character = this.characterRepository.create(createCharacter);
        return this.characterRepository.save(character);
    }

    async update(updateCharacterData: UpdateCharacterInput): Promise<Character> {
        await this.characterRepository.update(updateCharacterData.id, {
            name: updateCharacterData.name,
        });
        return this.characterRepository.findOne(updateCharacterData.id);
    }

    // TODO If a weapon is already equiped at the new weapon position, put the old weapon on character's inventory
    async equipWeapon(character: Character, weapon: Weapon): Promise<Character> {
        switch (weapon.type.position) {
            case WeaponPostion.HAND_LEFT:
                character.equipment.handLeft = weapon;
                break;
            case WeaponPostion.HAND_RIGHT:
                character.equipment.handRight = weapon;
                break;
            case WeaponPostion.TWO_HANDED:
                character.equipment.twoHanded = weapon;
                break;
        }
        return this.characterRepository.save(character);
    }
}
