import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { CharacterModule } from './character/character.module';
import { ItemModule } from './item/item.module';
import { ArmorModule } from './item/armor/armor.module';
import { WeaponModule } from './item/weapon/weapon.module';
import { ItemService } from './item/item/item.service';

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
