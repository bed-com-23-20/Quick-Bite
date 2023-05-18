import { IsNumberString, IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

}
