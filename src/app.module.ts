import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { CharacterModule } from './character/character.module';
import { ItemModule } from './item/item.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        GraphQLModule.forRoot({
            playground: false,
            autoSchemaFile: 'schema.gql',
        }),
        CharacterModule,
        ItemModule,
        AuthModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
