import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { WeaponTypeSeed } from '../_seeds/weapon-type.seed';

export class SeedWeaponType1576965174367 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        const weaponTypes = await getRepository('WeaponType').save(WeaponTypeSeed);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {}
}
