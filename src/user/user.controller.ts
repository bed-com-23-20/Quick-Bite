import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { request } from 'express';
import { User } from 'src/user/entities/user.entity';
import { AccountDto } from './dto/account.dto';
import { Login } from './dto/login.dto';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/postFood')
  storeFood(@Body() createUserDto: CreateUserDto) {
    return this.userService.storeFood(createUserDto);
  }

  @Get()
  getUsers(){
    return this.userService.get();
  }

 @Patch('/:userId')
  update(
    @Body() updateUserDto: UpdateUserDto,
    @Param('userId', ParseIntPipe) userId: number, 
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
  
}
