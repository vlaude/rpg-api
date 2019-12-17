import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Capacity } from './models/capacity.entity';
import { CreateSkillInput } from './dto/create-skill.input';
import { Skill } from './models/skill.entity';

@Resolver(of => Capacity)
export class CapacityResolver {
    @Mutation(returns => Skill)
    async createSkill(@Args('createSkillData') createSkillData: CreateSkillInput): Promise<Skill> {}
}
