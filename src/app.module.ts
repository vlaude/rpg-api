import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { CharacterModule } from './character/character.module';
import { WeaponModule } from './weapon/weapon.module';
import { ArmorModule } from './armor/armor.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        GraphQLModule.forRoot({
            playground: true,
            autoSchemaFile: 'schema.gql',
        }),
        CharacterModule,
        WeaponModule,
        ArmorModule,
    ],
    controllers: [],
})
export class AppModule {}
