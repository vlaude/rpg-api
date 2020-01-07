import { ObjectType, Field, InputType } from 'type-graphql';
import { Column } from 'typeorm';

@ObjectType()
@InputType('PassiveInput')
export class Passive {
    @Column({ nullable: true })
    @Field({ nullable: true })
    name: string;

    @Column({ type: 'text', nullable: true })
    @Field({ nullable: true })
    description: string;
}
