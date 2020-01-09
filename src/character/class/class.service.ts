import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Class } from './models/class.entity';
import { Repository } from 'typeorm';
import { CreateClassInput } from './dto/create-class.input';
import { Race } from '../race/models/race.entity';

@Injectable()
export class ClassService {
    constructor(
        @InjectRepository(Class)
        private readonly classRepository: Repository<Class>
    ) {}

    async findAll(): Promise<Class[]> {
        return this.classRepository.find();
    }

    async findOneById(id: string): Promise<Class> {
        return this.classRepository.findOne(id);
    }

    async findByName(name: string): Promise<Class> {
        return this.classRepository.findOne({ where: { name } });
    }

    async create(createClassData: CreateClassInput, compatibleRaces?: Race[]): Promise<Class> {
        const newClass = this.classRepository.create(createClassData);
        // Cascade will save relations
        newClass.compatibleRaces = compatibleRaces ? compatibleRaces : [];
        return this.classRepository.save(newClass);
    }

    async findCompatibleRacesByClassId(classId: string): Promise<Race[]> {
        const c = await this.classRepository.findOne({ where: { id: classId }, relations: ['compatibleRaces'] });
        return c.compatibleRaces;
    }
}
