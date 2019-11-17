import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';

import { CharacterModule } from './character/character.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        GraphQLModule.forRoot({
            playground: true,
            autoSchemaFile: 'schema.gql',
        }),
        CharacterModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
