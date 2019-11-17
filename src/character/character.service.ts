import { Injectable } from '@nestjs/common';
import { Character } from './entities/character.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CharacterService {
    constructor(
        @InjectRepository(Character)
        private readonly characterRepository: Repository<Character>
    ) {}

    async findAll(): Promise<Character[]> {
        return this.characterRepository.find();
    }
}
