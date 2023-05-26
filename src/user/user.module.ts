import { User } from './entities/user.entity';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { Account } from './entities/accountEntity';
import { Ordertable } from './entities/ordertable.entity';
import { CommentTable } from './entities/comment.entity';

@Module({

imports: [TypeOrmModule.forFeature([User, Account,Ordertable,CommentTable])],
providers: [UserService],
controllers: [UserController],
})
export class UserModule {}
