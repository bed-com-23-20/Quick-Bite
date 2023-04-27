import { User } from './entities/user.entity';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist';

@Module({
  //controllers: [UserController],
  //providers: [UserService]

imports: [TypeOrmModule.forFeature([User])],
providers: [UserService],
controllers: [UserController],
})
export class UserModule {}