import { ObjectType, Field, InputType } from 'type-graphql';
import { Column } from 'typeorm';

@ObjectType()
@InputType('PassiveInput')
export class Passive {
    @Column({ nullable: true })
    @Field()
    name: string;

    @Column({ type: 'text', nullable: true })
    @Field()
    description: string;
}
