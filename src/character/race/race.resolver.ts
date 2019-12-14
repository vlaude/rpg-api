import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { UserInputError } from 'apollo-server-errors';
import { Race } from './models/race.entity';
import { CreateRaceInput } from './dto/create-race.input';
import { RaceService } from './race.service';

@Resolver(of => Race)
export class RaceResolver {
    constructor(private readonly raceService: RaceService) {}

    @Query(returns => [Race], { name: 'races' })
    async getRaces(): Promise<Race[]> {
        return this.raceService.findAll();
    }

    @Mutation(returns => Race)
    async createRace(@Args('createRaceData') createRaceData: CreateRaceInput): Promise<Race> {
        const race = await this.raceService.findOneByName(createRaceData.name);
        if (race) {
            throw new UserInputError(`A race with the name ${createRaceData.name} already exists`);
        }
        return this.raceService.create(createRaceData);
    }
}
