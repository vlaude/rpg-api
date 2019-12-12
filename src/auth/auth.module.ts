import { Module } from '@nestjs/common';
import { GoogleStrategy } from './google.strategy';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
    providers: [AuthService, GoogleStrategy, JwtStrategy],
    controllers: [AuthController],
})
export class AuthModule {}
