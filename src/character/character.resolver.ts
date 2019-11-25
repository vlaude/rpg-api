import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CharacterService } from './character.service';
import { Character } from './entities/character.entity';
import { CreateCharacterInput } from './dto/create-character.input';

@Resolver(of => Character)
export class CharacterResolver {
    constructor(private readonly characterService: CharacterService) {}

    @Query(returns => [Character], { name: 'characters' })
    async getCharacters(): Promise<Character[]> {
        return await this.characterService.findAll();
    }

    @Mutation(returns => Character)
    async createCharacter(
        @Args('createCharacterData') createCharacterData: CreateCharacterInput
    ): Promise<Character> {
        return await this.characterService.create(createCharacterData);
    }
}
