import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Account } from "./accountEntity";
import { IsNumberString, IsString } from "class-validator";

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

    @Column()
    available: boolean;

    @Column()
    expireDate: Date;

    @ManyToOne((type)=>Account,(accounts)=>accounts.orders)

    @JoinColumn()
account: Account;
  orderName: import("d:/Proj/Quick-Bite-FoodS-Nest/quick-bite-foods/src/user/entities/user.entity").User;
}