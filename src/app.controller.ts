import { Controller, Get, Post, Req} from '@nestjs/common';
import { request } from 'express';

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
  @Get()
  getusers(){
    return{productName: 'Hotdog', productPrice: 'K1500'};
  }

  @Post()
  store(@Req() req: Request){
    return req.body;
  }



}
