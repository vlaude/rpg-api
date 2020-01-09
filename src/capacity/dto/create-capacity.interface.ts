import { InterfaceType, Field } from 'type-graphql';
import { DamageType } from 'src/item/weapon/weapon-type/models/damage-type.enum';
import { TargetType } from '../models/target-type.enum';
import { Race } from 'src/character/race/models/race.entity';
import { StatAlteration } from '../models/stat-alteration.embedded';
import { AdditionnalEffect } from '../models/additionnal-effect.embedded';

export abstract class ICapacity {
    @Field()
    name: string;

    @Field()
    description: string;

    healthCost?: number;

    damageType: DamageType;

    targetType?: TargetType;

    needInitiative?: boolean;

    giveInitiative?: boolean;

    counterSpell?: boolean;

    counterSkill?: boolean;

    levelRequired?: number;

    classRequired?: string;

    raceRequired?: Race;

    cooldown?: number;

    statAlteration?: StatAlteration;

    additionnalEffect?: AdditionnalEffect;
}
