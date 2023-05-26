
import { type } from 'os';
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Ordertable } from './ordertable.entity';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CommentTable } from './comment.entity';
@Entity()
export class Account{

@PrimaryGeneratedColumn()
accountId: number;

@Column()
@IsString()
firstname: string;

@Column()
@IsString()
lastname: string;

@Column()
@IsEmail()
email: string;

@Column()
@IsNumber()
phonenumber: number;


@Column()
location: string;

@Column()
datecreated: Date;

@Column()
@IsNotEmpty()
password: number;

@OneToMany((type)=>Ordertable,(orders)=>orders.account)

orders : Ordertable[]; 

@OneToMany((type)=> CommentTable,(commenttable) =>commenttable.account)

commenttables: CommentTable[];
} 