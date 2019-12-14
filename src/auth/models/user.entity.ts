import { Character } from 'src/character/character/models/character.entity';
import { UserRole } from './user-role.enum';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BeforeInsert } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { Logger } from '@nestjs/common';
import { hash } from 'bcrypt';

@Entity()
@ObjectType()
export class User {
    @PrimaryGeneratedColumn()
    @Field(type => ID)
    id: string;

    @Column({ unique: true })
    @Field()
    username: string;

    @Column({ select: false })
    password: string;

    @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
    @Field(type => UserRole)
    role: UserRole;

    @Column({ unique: true, nullable: true, select: false })
    email?: string;

    @OneToMany(
        type => Character,
        character => character.owner
    )
    @Field(type => [Character])
    characters: Character[];

    @BeforeInsert()
    async hashPassword() {
        this.password = await hash(this.password, 10);
    }
}
