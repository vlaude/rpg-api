import { Injectable } from '@nestjs/common';
import { Character } from './entities/character.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCharacterInput } from './dto/create-character.input';

@Injectable()
export class CharacterService {
    constructor(
        @InjectRepository(Character)
        private readonly characterRepository: Repository<Character>
    ) {}

    async findAll(): Promise<Character[]> {
        return this.characterRepository.find();
    }

    async create(
        createCharacterData: CreateCharacterInput
    ): Promise<Character> {
        const character = this.characterRepository.create(createCharacterData);
        return this.characterRepository.save(character);
    }
}
