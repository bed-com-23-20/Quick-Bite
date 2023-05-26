//import { CommentTable } from './comment.entity';
import { User } from 'src/user/entities/user.entity';
import { type } from 'os';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Account } from './accountEntity';

@Entity()
export class CommentTable{

    @PrimaryGeneratedColumn()
    commentId : number

    @Column()
    comment : string;

    @ManyToOne((type)=>Account,(account)=>account.commenttables)

    @JoinColumn()
    account:Account;
  
  

}