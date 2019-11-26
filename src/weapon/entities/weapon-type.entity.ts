import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, registerEnumType } from 'type-graphql';

enum WeaponCategory {
    SWORD = 'sword',
    AXE = 'axe',
    MACE = 'mace',
    BOW = 'bow',
    WAND = 'wand',
    STAFF = 'staff',
}

registerEnumType(WeaponCategory, { name: 'WeaponCategory' });

enum DamageType {
    MELEE_PHYSICAL = 'melee_physical',
    MELEE_MAGIC = 'melee_magic',
    DISTANCE_PHYSICAL = 'distance_physical',
    DISTANCE_MAGIC = 'distance_magic',
}

registerEnumType(DamageType, { name: 'DamageType' });

enum WeaponPostion {
    TWO_HANDED = 'two_handed',
    HAND_RIGHT = 'hand_right',
    HAND_LEFT = 'hand_left',
}

registerEnumType(WeaponPostion, { name: 'WeaponPosition' });

@Entity()
@ObjectType()
export class WeaponType {
    @PrimaryGeneratedColumn()
    @Field(type => ID)
    id: string;

    @Column({ unique: true })
    @Field()
    name: string;

    @Column({ type: 'enum', enum: WeaponCategory })
    @Field(type => WeaponCategory)
    category: WeaponCategory;

    @Column({ type: 'enum', enum: DamageType })
    @Field(type => DamageType)
    damageType: DamageType;

    @Column({ type: 'enum', enum: WeaponPostion })
    @Field(type => WeaponPostion)
    position: WeaponPostion;

    @Column({ type: 'text', nullable: true })
    @Field({ nullable: true })
    description?: string;

    @Column({ type: 'int' })
    @Field(type => Int)
    minBonusStrength: number;

    @Column({ type: 'int' })
    @Field(type => Int)
    maxBonusStrength: number;

    @Column({ type: 'int' })
    @Field(type => Int)
    minBonusDexterity: number;

    @Column({ type: 'int' })
    @Field(type => Int)
    maxBonusDexterity: number;

    @Column({ type: 'int' })
    @Field(type => Int)
    minBonusIntelligence: number;

    @Column({ type: 'int' })
    @Field(type => Int)
    maxBonusIntelligence: number;

    @Column({ type: 'int' })
    @Field(type => Int)
    minBonusVitality: number;

    @Column({ type: 'int' })
    @Field(type => Int)
    maxBonusVitality: number;
}
