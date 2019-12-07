import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { CharacterModule } from './character/character.module';
import { WeaponModule } from './weapon/weapon.module';
import { ArmorModule } from './armor/armor.module';
import { ItemService } from './item/item.service';
import { ItemModule } from './item/item.module';

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
        ItemModule,
    ],
    controllers: [],
    providers: [ItemService],
})
export class AppModule {}
