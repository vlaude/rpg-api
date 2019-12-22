import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { RaceSeed } from '../_seeds/race.seed';

export class SeedRace1576963267322 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        const races = await getRepository('Race').save(RaceSeed);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {}
}
