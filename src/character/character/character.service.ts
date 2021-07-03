import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCharacterInput } from './dto/create-character.input';
import { UpdateCharacterInput } from './dto/update-character-input';
import { Character } from './models/character.entity';

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
        // Cascade will create Equipment and Inventory automatically
        const createCharacter = {
            ...createCharacterData,
            equipment: {},
            inventory: {},
            race: {
                id: createCharacterData.raceId,
            },
        };
        const character = this.characterRepository.create(createCharacter);
        // save does not return id when cascade insert
        // @see https://github.com/typeorm/typeorm/issues/4090
        const createdCharacter = await this.characterRepository.save(character);
        return this.findOneByName(createdCharacter.name);
    }

    async update(updateCharacterData: UpdateCharacterInput): Promise<Character> {
        await this.characterRepository.update(updateCharacterData.id, {
            name: updateCharacterData.name,
        });
        return this.characterRepository.findOne(updateCharacterData.id);
    }
}
