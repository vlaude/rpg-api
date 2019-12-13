import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './models/user.entity';
import { Repository } from 'typeorm';
import { RegisterInput } from './dto/register.input';
import { AuthResponse } from './dto/auth-response';
import { sign } from 'jsonwebtoken';

@Injectable()
export class AuthService {
    private readonly JWT_SECRET_KEY = 'ImSuperSecret!';

    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

    async register(registerData: RegisterInput): Promise<AuthResponse> {
        const createUser = this.userRepository.create(registerData);
        const user = await this.userRepository.save(createUser);

        // Create a JWT with jsonwebtoken
        const jwt = sign({ id: user.id }, this.JWT_SECRET_KEY, { expiresIn: 3600 });
        return {
            token: jwt,
            message: `User ${user.username} created`,
        };
    }
}
