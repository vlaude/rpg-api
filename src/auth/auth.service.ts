import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './models/user.entity';
import { Repository } from 'typeorm';
import { RegisterInput } from './dto/register.input';
import { AuthResponse } from './dto/auth-response';
import { sign } from 'jsonwebtoken';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
    private readonly JWT_SECRET_KEY = 'ImSuperSecret!';

    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

    async register(registerData: RegisterInput): Promise<AuthResponse> {
        // TODO Return user, and generate token in resolver with a generateAccessToken function call
        const createUser = this.userRepository.create(registerData);
        const user = await this.userRepository.save(createUser);

        return this.generateAccessToken(user, `User ${user.username} created`);
    }

    async verifyPassword(user: User, password: string): Promise<boolean> {
        // First, retreive hashed password
        const hash = await this.userRepository
            .createQueryBuilder()
            .addSelect('password')
            .select('password')
            .where('id = :id', { id: user.id })
            .getRawOne();

        // Compare
        return compare(password, hash.password);
    }

    async generateAccessToken(user: User, message?: string): Promise<AuthResponse> {
        // Create a JWT with jsonwebtoken
        const jwt = sign({ id: user.id }, this.JWT_SECRET_KEY, { expiresIn: 3600 });
        return {
            token: jwt,
            message,
        };
    }
}
