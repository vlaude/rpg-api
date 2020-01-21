import { WeaponCategory } from 'src/item/weapon/weapon-type/models/weapon-category.enum';
import { ObjectType, Field, Float, InputType } from 'type-graphql';
import { Column } from 'typeorm';

@ObjectType()
@InputType('WeaponCategoryBonusInput')
export class WeaponCategoryBonus {
    @Column({ type: 'enum', enum: WeaponCategory, nullable: true })
    @Field(() => WeaponCategory, { nullable: true })
    weaponCategory: WeaponCategory;

    @Column({ type: 'float', nullable: true })
    @Field(() => Float, { nullable: true })
    bonusDamage: number;
}
