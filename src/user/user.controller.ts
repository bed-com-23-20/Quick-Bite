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
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('User Module')
@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/postFood')
  @ApiOperation({summary: 'posting  a new product'})
  @ApiBody({
    schema:{
      type: 'object',
      properties:{id:{
        type: 'number',
        example: 3,
        description: 'this is unique id',
      },
      productName:{
        type: 'string',
        example: 'samusa',
        description: 'this is product name',
      },
      productPrice :{
        type: 'string',
        example: 'K500',
        description: 'this is the product Price',
      },
      expireDate:{
        type: 'date',
        example: '2023-04-12',
      },
      available:{
        type: 'boolean',
        example: 'true',
        description:'if available use true. If not use false',

      }

      }
    }
  })
  @ApiResponse({
    status: 200,
    description : 'a post created successfuly',
   })
   @ApiResponse({
    status: 300,
    description: 'Fobidden'
   })
  @UsePipes(new ValidationPipe())
  storeFood(@Body() createUserDto: UserDto) {
    return this.userService.storeFood(createUserDto);
  }

  @Get()
  @ApiOperation({summary: 'get all products from this api'})
  @ApiResponse({
    status: 200,
    description: 'All Data List',
  })
  getUsers(){
    return this.userService.get();
  }

 @Patch('/:userId')
 @ApiOperation({summary: 'update the products'})
 @ApiParam({
  name: 'id',
  type: 'number',
  description: 'enter unique id',
  required: true
 })
 @ApiBody({
  schema:{
    type:'object',
    properties:{
      id:{
        type: 'number',
        example: 3,
        description: 'this is unique id',
      },
      productName:{
        type: 'string',
        example: 'samusa',
        description: 'this is product name',
      },
      productPrice :{
        type: 'string',
        example: 'K500',
        description: 'this is the product Price',
      },
      expireDate:{
        type: 'date',
        example: '2023-04-12',
      },
      available:{
        type: 'boolean',
        example: 'true',
        description:'if available use true. If not use false',

      }
    }
  }
 })
 @ApiResponse({
  status: 200,
  description : 'update successfuly',
 })
 @ApiResponse({
  status: 300,
  description: 'Fobidden'
 })
  update(
    @Body() updateUserDto: UserDto,
    @Param('userId', ParseIntPipe) userId: any 
  ){
    return this.userService.update(updateUserDto, userId);
}

  @Delete('/delete/:id')
  @ApiOperation({summary: 'deleting the product'})
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'enter unique id',
    required: true
  })
  @ApiResponse({
    status: 200,
    description : 'deleted the product'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden'
  })
  remove(@Param('id') id: number) {
    return this.userService.delete(id);
  }

  @Get('/findItem/:id')
  @ApiOperation({summary: 'finding one peoduct'})
  @ApiParam({
    name: 'id',
    type: 'number',
    required:true,
    description: 'this is unique id',
  })
  getUser(@Param()id:number){
    return this.userService.getUser(id);
  }
@Post('/createAccount')
@ApiOperation({summary: 'creating a user account'})
@ApiBody({
  schema:{
    type: 'object',
    properties:{
      firstname:{
        type: 'string', 
      },
      lastname :{
        type: 'string'
      },
      email:{
        type : 'string'
      },
      phonenumber:{
        type: 'number'
      },
      location:{
        type: 'string'
      },
      datecreated:{
        type:'Date'
      },
      password:{
        type: 'number',
        example:'1234567'
      }
    }
  }
})
@ApiResponse({
  status: 200,
  description : 'account created successfuly',
 })
 @ApiResponse({
  status: 300,
  description: 'Fobidden'
 })

createAccount(@Body() accountDto: AccountDto){

  return this.userService.createAccount(accountDto);
}
@Post('/login')
@ApiOperation({summary:'user loging in'})
@ApiBody({
  schema:{
    type:'object',
    properties:{
      email:{
        type: 'string',
        example:'Zanda@gmail.com'
      },
      password:{
        type: 'number',
        example: '1234567'
      }
    }
  }
})
@ApiResponse({
  status: 200,
  description : 'logged in successfuly',
 })
 @ApiResponse({
  status: 300,
  description: 'Fobidden'
 })
login(@Body()Body:Login){
  return this.userService.login(Body);
}

@Post('/comment/:id')
@ApiOperation({summary: 'user comment on the product'})
@ApiBody({
  schema:{
    type:'object',
    properties:{
      comment:{
        type: 'string'
      }
    }
  }
})
comments(@Param('id')id:number,@Body('body')body: CommentDto){
  return this.userService.comments(id,body);
}

@Post('/bookproduct/:Aid/:Uid')
@ApiOperation({summary: 'user placing an order of the product'})
@ApiBody({
  schema:{
    type:'object',
    properties:{
      userId:{
        type: 'number',
      },
      productId:{
        type: 'number'
      },
      productName:{
        type: 'string'
      },
      productPrice:{
        type:'string'
      }
    }
  }
})
@ApiResponse({
  status: 200,
  description : 'booking successfuly',
 })
 @ApiResponse({
  status: 300,
  description: 'Fobidden'
 })
booking(
  @Param('Aid') Aid:number,
  @Param('Uid') Uid: number,
  @Body() body:OrderDto,
): Promise  <Ordertable>{
  return this.userService.creatOrder(Aid, Uid,body);
}

  
}
