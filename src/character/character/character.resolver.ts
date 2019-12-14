import { Resolver, Query, Mutation, Args, ResolveProperty, Parent } from '@nestjs/graphql';
import { UserInputError } from 'apollo-server-errors';
import { CharacterService } from './character.service';
import { CreateCharacterInput } from './dto/create-character.input';
import { UpdateCharacterInput } from './dto/update-character-input';
import { Character } from './models/character.entity';
import { WeaponService } from 'src/item/weapon/weapon/weapon.service';
import { AuthGuard } from '@nestjs/passport';
import { UseGuards } from '@nestjs/common';
import { RaceService } from '../race/race.service';

@Resolver(of => Character)
export class CharacterResolver {
    constructor(
        private readonly characterService: CharacterService,
        private readonly weaponService: WeaponService,
        private readonly raceService: RaceService
    ) {}

    @Query(returns => Character, { name: 'character' })
    async getCharacterById(@Args('id') id: string): Promise<Character> {
        const character = await this.characterService.findOneById(id);
        if (!character) {
            throw new UserInputError(`No user found for id ${id}`);
        }
        return character;
    }

    @Query(returns => [Character], { name: 'characters' })
    async getCharacters(): Promise<Character[]> {
        return this.characterService.findAll();
    }

    @Mutation(returns => Character)
    async createCharacter(@Args('createCharacterData') createCharacterData: CreateCharacterInput): Promise<Character> {
        const character = await this.characterService.findOneByName(createCharacterData.name);
        if (character) {
            throw new UserInputError('This name is not available');
        }
        const race = await this.raceService.findOneById(createCharacterData.raceId);
        if (!race) {
            throw new UserInputError(`No race found for id ${createCharacterData.raceId}`);
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
        return this.characterService.update(updateCharacterData);
    }
}
