import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserInputError } from 'apollo-server-errors';
import { CharacterService } from './character.service';
import { CreateCharacterInput } from './dto/create-character.input';
import { UpdateCharacterInput } from './dto/update-character-input';
import { Character } from './models/character.entity';
import { WeaponService } from 'src/item/weapon/weapon/weapon.service';
import { AuthGuard } from '@nestjs/passport';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';

@Resolver(of => Character)
export class CharacterResolver {
    constructor(private readonly characterService: CharacterService, private readonly weaponService: WeaponService) {}

    @Query(returns => Character, { name: 'character' })
    async getCharacterById(@Args('id') id: string): Promise<Character> {
        const character = await this.characterService.findOneById(id);
        if (!character) {
            throw new UserInputError(`No user found for id ${id}`);
        }
        return character;
    }

    @Query(returns => [Character], { name: 'characters' })
    @UseGuards(GqlAuthGuard)
    async getCharacters(): Promise<Character[]> {
        return await this.characterService.findAll();
    }

    @Mutation(returns => Character)
    async createCharacter(@Args('createCharacterData') createCharacterData: CreateCharacterInput): Promise<Character> {
        const character = await this.characterService.findOneByName(createCharacterData.name);
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
