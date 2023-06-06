import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { request } from 'express';
import { User } from 'src/user/entities/user.entity';
import { AccountDto } from './dto/account.dto';
import { Login } from './dto/login.dto';
import { CommentDto } from './dto/comment.dto';
import { OrderDto } from './dto/order.dto';
import { Ordertable } from './entities/ordertable.entity';
import { UserDto } from './dto/user.dto';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/postFood')
  @UsePipes(new ValidationPipe())
  storeFood(@Body() createUserDto: UserDto) {
    return this.userService.storeFood(createUserDto);
  }

  @Get()
  getUsers(){
    return this.userService.get();
  }

 @Patch('/:userId')
  update(
    @Body() updateUserDto: UserDto,
    @Param('userId', ParseIntPipe) userId: any 
  ){
    return this.userService.update(updateUserDto, userId);
}

  @Delete('/delete/:id')
  remove(@Param('id') id: number) {
    return this.userService.delete(id);
  }

  @Get('/findItem/:id')
  getUser(@Param()id:number){
    return this.userService.getUser(id);
  }
@Post('/createAccount')
createAccount(@Body() accountDto: AccountDto){

  return this.userService.createAccount(accountDto);
}
@Post('/login')
login(@Body()Body:Login){
  return this.userService.login(Body);
}

@Post('/comment/:id')
comments(@Param('id')id:number,@Body('body')body: CommentDto){
  return this.userService.comments(id,body);
}

@Post('/bookproduct/:Aid/:Uid')
booking(
  @Param('Aid') Aid:number,
  @Param('Uid') Uid: number,
  @Body() body:OrderDto,
): Promise  <Ordertable>{
  return this.userService.creatOrder(Aid, Uid,body);
}

  
}
