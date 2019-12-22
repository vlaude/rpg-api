import { EffectType } from 'src/capacity/models/effect-type.enum';
import { ObjectType, Field, InputType } from 'type-graphql';
import { Column } from 'typeorm';

@ObjectType()
@InputType('InsensibilityInput')
export class Insensibility {
    @Column({ type: 'enum', enum: EffectType, nullable: true })
    @Field(type => EffectType)
    effectType: EffectType;
}
