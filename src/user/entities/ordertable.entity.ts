import { Column, Entity,OneToOne, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Account } from "./accountEntity";
import { IsNumberString, IsString } from "class-validator";
import { User } from "./user.entity";

@Entity()
export class Ordertable{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsString()
    productName: string;

    @Column()
    @IsNumberString()
    productPrice: string;

    // @Column()
    // available: boolean;

    // @Column()
    // expireDate: Date;

    @ManyToOne((type)=>Account,(accounts)=>accounts.orders)
    account: Account;

    @OneToOne(() => User,(users)=>users.orders)
    @JoinColumn()
    user:User;
    
    
}