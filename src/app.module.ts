import { User } from './user/entities/user.entity';
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './user/entities/accountEntity';



@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'quickbitefoods',
    entities: [User, Account],
    synchronize: true,

  }),UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
