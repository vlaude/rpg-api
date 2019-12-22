import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { CharacterSeed } from '../_seeds/character.seed';

export class SeedCharacter1576963797744 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        const characters = await getRepository('Character').save(CharacterSeed);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {}
}
