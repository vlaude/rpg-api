import { Resolver, Query } from '@nestjs/graphql';
import { CharacterService } from './character.service';
import { Character } from './entities/character.entity';

@Resolver(of => Character)
export class CharacterResolver {
    constructor(private readonly characterService: CharacterService) {}

    @Query(returns => [Character], { name: 'characters' })
    async getCharacters(): Promise<Character[]> {
        return await this.characterService.findAll();
    }
}
