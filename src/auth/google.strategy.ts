import { Injectable, Logger } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { AuthService, Provider } from './auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor(private readonly authService: AuthService) {
        super({
            clientID: '992811571084-vtnt6s66d0mjs3vh8ddrkfoifivo58gj.apps.googleusercontent.com',
            clientSecret: 'C4uC9WW8y2xca0nTMP9khAM9',
            callbackURL: 'http://localhost:3000/auth/google/callback',
            passReqToCallback: true,
            scope: ['profile', 'email'],
        });
    }

    async validate(request: any, accessToken: string, refreshToken: string, profile, done: Function) {
        try {
            Logger.debug(profile);

            const jwt: string = await this.authService.validateOAuthLogin(profile.id, Provider.GOOGLE);
            const user = {
                jwt,
            };

            done(null, user);
        } catch (err) {
            Logger.error(err);
            done(err, false);
        }
    }
}
