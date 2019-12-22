import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Class } from './models/class.entity';
import { CreateClassInput } from './dto/create-class.input';
import { ClassService } from './class.service';
import { UserInputError } from 'apollo-server-errors';

@Resolver(of => Class)
export class ClassResolver {
    constructor(private readonly classService: ClassService) {}

    @Mutation(returns => Class)
    async createClass(@Args('createClassData') createClassData: CreateClassInput): Promise<Class> {
        const existingClass = await this.classService.findByName(createClassData.name);
        if (existingClass) {
            throw new UserInputError(`A class with the name ${createClassData.name} already exists`);
        }
        return this.classService.create(createClassData);
    }
}
