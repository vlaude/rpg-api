import { Resolver, Args, Mutation, Query, Parent, ResolveProperty } from '@nestjs/graphql';
import { Class } from './models/class.entity';
import { CreateClassInput } from './dto/create-class.input';
import { ClassService } from './class.service';
import { UserInputError } from 'apollo-server-errors';
import { Race } from '../race/models/race.entity';
import { RaceService } from '../race/race.service';
import { Logger } from '@nestjs/common';

@Resolver(of => Class)
export class ClassResolver {
    constructor(private readonly classService: ClassService, private readonly raceService: RaceService) {}

    @Query(returns => [Class], { name: 'classes' })
    async getClasses(): Promise<Class[]> {
        return this.classService.findAll();
    }

    @Query(returns => Class, { name: 'class' })
    async getClassById(@Args('id') id: string): Promise<Class> {
        const theClass = this.classService.findOneById(id);
        if (!theClass) {
            throw new UserInputError(`No class found for id ${id}`);
        }
        return theClass;
    }

    @Mutation(returns => Class)
    async createClass(@Args('createClassData') createClassData: CreateClassInput): Promise<Class> {
        const existingClass = await this.classService.findByName(createClassData.name);
        if (existingClass) {
            throw new UserInputError(`A class with the name ${createClassData.name} already exists`);
        }

        const racesPromises: Promise<Race>[] = createClassData.compatibleRacesIds.map(raceId =>
            this.raceService.findOneById(raceId)
        );
        let races: Race[] = [];
        try {
            races = await Promise.all(racesPromises);
        } catch (error) {
            throw new UserInputError(`You provided an invalid id in compatible races`);
        }

        // Check if races contains a null value
        races.forEach(race => {
            if (!race) {
                throw new UserInputError(`You provided an unknown race id in compatible races`);
            }
        });

        return this.classService.create(createClassData, races);
    }

    @ResolveProperty(returns => [Race])
    async compatibleRaces(@Parent() c: Class): Promise<Race[]> {
        return this.classService.findCompatibleRacesByClassId(c.id);
    }
}
