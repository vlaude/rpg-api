import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { ArmorTypeSeed } from 'src/_seeds/armor-type.seed';

export class SeedArmorType1577022430400 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        const armorTypes = await getRepository('ArmorType').save(ArmorTypeSeed);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {}
}
