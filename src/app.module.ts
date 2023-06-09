import { User } from './user/entities/user.entity';
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './user/entities/accountEntity';
import { Ordertable } from './user/entities/ordertable.entity';
import { CommentTable } from './user/entities/comment.entity';



@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'sql10.freesqldatabase.com',
    port: 3306,
    username: 'sql10624838',
    password: ' L3vFgf21Gj',
    database: 'quickbitefoods',
    entities: [User, Account,Ordertable, CommentTable],
    synchronize: false,

  }),UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
