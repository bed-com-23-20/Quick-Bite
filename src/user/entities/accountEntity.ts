import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
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

} 