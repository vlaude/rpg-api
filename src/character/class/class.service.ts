import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Class } from './models/class.entity';
import { Repository } from 'typeorm';
import { CreateClassInput } from './dto/create-class.input';

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

    async create(createClassData: CreateClassInput): Promise<Class> {
        const newClass = this.classRepository.create(createClassData);
        return this.classRepository.save(newClass);
    }
}
