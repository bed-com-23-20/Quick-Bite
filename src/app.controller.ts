import { UserService } from './user/user.service';
import { Controller, Get, Param, Post, Req} from '@nestjs/common';
import { request } from 'express';
import { User } from './user/entities/user.entity';

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get()
//   getHello(): string {
//     return this.appService.getHello();
//   }
// }
@Controller()
export class AppController{
  userService: any;
  @Get()
  getusers(){
    return{productName: 'Hotdog', productPrice: 'K1500'};
  }
  // @Get(':userId')
  // get(@Param('userId')userId: number):Promise<User>{ 
  //   return this.userService.getOne(userId); 
  // }



  @Post()
  store(@Req() req: Request){
    return req.body;
  }



}
