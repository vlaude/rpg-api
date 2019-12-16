import { Capacity } from './capacity.entity';
import { ChildEntity, Column } from 'typeorm';
import { WeaponCategory } from 'src/item/weapon/weapon-type/models/weapon-category.enum';

@ChildEntity()
export class Skill extends Capacity {
    @Column({ type: 'int' })
    staminaCost: number;

    @Column({ type: 'int' })
    weaponDamageProportion: number;

    @Column({ type: 'int' })
    bonusDamage: number;

    @Column({ type: 'enum', enum: WeaponCategory, nullable: true })
    weaponCategoryRequired: WeaponCategory;
}
