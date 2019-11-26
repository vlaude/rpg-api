import { Injectable } from '@nestjs/common';
import { Character } from './entities/character.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCharacterInput } from './dto/create-character.input';
import { UpdateCharacterInput } from './dto/update-character-input';

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
        const character = this.characterRepository.create(createCharacterData);
        return this.characterRepository.save(character);
    }

    async update(updateCharacterData: UpdateCharacterInput): Promise<Character> {
        await this.characterRepository.update(updateCharacterData.id, {
            name: updateCharacterData.name,
        });
        return this.characterRepository.findOne(updateCharacterData.id);
    }
}
