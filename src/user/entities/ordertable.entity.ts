import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Account } from "./accountEntity";

@Entity()
export class Ordertable{
    id: number;

    @Column()
    productName: string;

    @Column()
    productPrice: string;

    @Column()
    available: boolean;

    @Column()
    expireDate: Date;

    @ManyToOne((type)=>Account,(accounts)=>accounts.orders)
account: Account;
}