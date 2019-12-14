import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Race } from './models/race.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRaceInput } from './dto/create-race.input';

@Injectable()
export class RaceService {
    constructor(@InjectRepository(Race) private readonly raceRepository: Repository<Race>) {}

    async findOneById(id: string): Promise<Race> {
        return this.raceRepository.findOne(id);
    }

    async findOneByName(name: string): Promise<Race> {
        return this.raceRepository.findOne({ where: { name } });
    }

    async findAll(): Promise<Race[]> {
        return this.raceRepository.find();
    }

    async create(createRaceData: CreateRaceInput): Promise<Race> {
        const race = this.raceRepository.create(createRaceData);
        return this.raceRepository.save(race);
    }
}
