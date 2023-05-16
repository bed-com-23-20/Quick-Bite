
import { type } from 'os';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Ordertable } from './ordertable.entity';
@Entity()
export class Account{

@PrimaryGeneratedColumn()
accountId: number;

@Column()
firstname: string;

@Column()
lastname: string;

@Column()
email: string;

@Column()
phonenumber: number;


@Column()
location: string;

@Column()
datecreated: Date;

@Column()
password: number;

@OneToMany((type)=>Ordertable,(orders)=>orders.account)
orders : Ordertable[]; 

} 