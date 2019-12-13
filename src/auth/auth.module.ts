import { Module } from '@nestjs/common';
import { JwtStrategy } from './jwt.strategy';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './models/user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [JwtStrategy, AuthResolver, AuthService, UserService],
    controllers: [],
})
export class AuthModule {}
