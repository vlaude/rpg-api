import { Module } from '@nestjs/common';
import { CharacterResolver } from './character.resolver';
import { CharacterService } from './character.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Character } from './models/character.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Character])],
    providers: [CharacterResolver, CharacterService],
})
export class CharacterModule {}
