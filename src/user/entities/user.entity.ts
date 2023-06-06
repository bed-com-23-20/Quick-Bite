import { IsBoolean, IsDate, IsNumberString, IsString } from "class-validator";
import { Column, JoinColumn, Entity, OneToMany, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { Ordertable } from "./ordertable.entity";
import { CommentTable } from "./comment.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsString()
    productName: string;

    @Column()
    @IsString()
    productPrice: string;

    // @Column()
    // @IsBoolean()
    // available: boolean;
    
//     @Column()
//    // @IsDate()
//     expireDate: Date;

    @OneToOne(() => Ordertable,(ordertables)=>ordertables.user)
    orders: Ordertable[];

    
}
