import { IsNumberString, IsString } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CommentTable } from "./comment.entity";

@Entity()
export class User {
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


   // @OneToMany((type)=> CommentTable,(commenttable) =>commenttable.account);


}
