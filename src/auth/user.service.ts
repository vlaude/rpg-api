import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './models/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

    async findOneById(id: string): Promise<User> {
        return this.userRepository.findOne(id);
    }

    async findOneByUsername(username: string): Promise<User> {
        return this.userRepository.findOne({ where: { username } });
    }

    async findOneByEmail(email: string): Promise<User> {
        return this.userRepository.findOne({ where: { email } });
    }
}
