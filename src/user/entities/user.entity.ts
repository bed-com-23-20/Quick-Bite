import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    productName: string;

    @Column()
    productPrice: string;

    @Column()
    available: string;

    @Column()
    expireDate: Date;

}