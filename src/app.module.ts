import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { CharacterModule } from './character/character.module';
import { ItemModule } from './item/item.module';
import { ArmorModule } from './item/armor/armor.module';
import { WeaponModule } from './item/weapon/weapon.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        GraphQLModule.forRoot({
            playground: true,
            autoSchemaFile: 'schema.gql',
            context: ({ req }) => ({ req }),
        }),
        CharacterModule,
        WeaponModule,
        ArmorModule,
        ItemModule,
        AuthModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
