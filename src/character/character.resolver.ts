import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserInputError } from 'apollo-server-errors';
import { CharacterService } from './character.service';
import { CreateCharacterInput } from './dto/create-character.input';
import { UpdateCharacterInput } from './dto/update-character-input';
import { Character } from './models/character.entity';

@Resolver(of => Character)
export class CharacterResolver {
    constructor(private readonly characterService: CharacterService) {}

    @Query(returns => [Character], { name: 'characters' })
    async getCharacters(): Promise<Character[]> {
        return await this.characterService.findAll();
    }

    @Mutation(returns => Character)
    async createCharacter(@Args('createCharacterData') createCharacterData: CreateCharacterInput): Promise<Character> {
        const character = this.characterService.findOneByName(createCharacterData.name);
        if (character) {
            throw new UserInputError('This name is not available');
        }
        return await this.characterService.create(createCharacterData);
    }

    @Mutation(returns => Character)
    async updateCharacter(@Args('updateCharacterData') updateCharacterData: UpdateCharacterInput): Promise<Character> {
        const characterById = await this.characterService.findOneById(updateCharacterData.id);
        if (!characterById) {
            throw new UserInputError(`Could not find character with id ${updateCharacterData.id}`);
        }
        const characterByName = await this.characterService.findOneByName(updateCharacterData.name);
        if (characterByName && characterByName.id + '' !== updateCharacterData.id) {
            throw new UserInputError('This name is not available');
        }
        return await this.characterService.update(updateCharacterData);
    }
}
