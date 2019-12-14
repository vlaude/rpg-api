import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { UserInputError, AuthenticationError } from 'apollo-server-errors';
import { RegisterInput } from './dto/register.input';
import { AuthResponse } from './dto/auth-response';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { LoginInput } from './dto/login.input';

@Resolver(of => AuthResponse)
export class AuthResolver {
    constructor(private readonly authService: AuthService, private readonly userService: UserService) {}

    @Mutation(returns => AuthResponse)
    async register(@Args('registerData') registerData: RegisterInput): Promise<AuthResponse> {
        const userByUsername = await this.userService.findOneByUsername(registerData.username);
        if (userByUsername) {
            throw new UserInputError('This username is not available');
        }
        const userByEmail = await this.userService.findOneByEmail(registerData.email);
        if (userByEmail) {
            throw new UserInputError('A user with this email already exists');
        }

        return this.authService.register(registerData);
    }

    @Query(returns => AuthResponse)
    async login(@Args('loginData') loginData: LoginInput): Promise<AuthResponse> {
        const user = await this.userService.findOneByUsername(loginData.username);
        if (!user) {
            throw new AuthenticationError('Username or password incorrect');
        }
        const verifyPassword = await this.authService.verifyPassword(user, loginData.password);
        if (!verifyPassword) {
            throw new AuthenticationError('Username or password incorrect');
        }
        return this.authService.generateAccessToken(user, 'Authentication succeed');
    }
}
