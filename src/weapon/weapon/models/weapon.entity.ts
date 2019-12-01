import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { ObjectType, Field, ID, Int } from 'type-graphql';
import { WeaponType } from 'src/weapon/weapon-type/models/weapon-type.entity';
import { WeaponPostion } from 'src/weapon/weapon-type/models/weapon-position.enum';
import { WeaponCategory } from 'src/weapon/weapon-type/models/weapon-category.enum';
import { DamageType } from 'src/weapon/weapon-type/models/damage-type.enum';

@Entity()
@ObjectType()
export class Weapon {
    @PrimaryGeneratedColumn()
    @Field(type => ID)
    id: string;

    @ManyToOne(
        type => WeaponType,
        weaponType => weaponType.instances,
        { eager: true }
    )
    @Field(type => WeaponType)
    type: WeaponType;

    @Field()
    name: string;

    @Field(type => WeaponCategory)
    category: WeaponCategory;

    @Field(type => DamageType)
    damageType: DamageType;

    @Field(type => WeaponPostion)
    position: WeaponPostion;

    @Field({ nullable: true })
    description?: string;

    @Column({ type: 'int' })
    @Field(type => Int)
    bonusStrength: number;

    @Column({ type: 'int' })
    @Field(type => Int)
    bonusDexterity: number;

    @Column({ type: 'int' })
    @Field(type => Int)
    bonusIntelligence: number;

    @Column({ type: 'int' })
    @Field(type => Int)
    bonusVitality: number;
}
