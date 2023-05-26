import { Injectable, Param ,Body} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { Account } from './entities/accountEntity';
import { AccountDto } from './dto/account.dto';
import { Login } from './dto/login.dto';
import { Ordertable } from './entities/ordertable.entity';
import { OrderDto } from './dto/order.dto';
import { CommentDto } from './dto/comment.dto';
import { CommentTable } from './entities/comment.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
    @InjectRepository(Ordertable)
    private orderRepository: Repository<Ordertable>,
    @InjectRepository(CommentTable)
    private commentsRepository: Repository<CommentTable>,
  ){}

storeFood(@Body() createUserDto: CreateUserDto) {
  return this.userRepository.save(createUserDto);
}
  get():Promise<User[]>{ 
    return this.userRepository.find(); 
  }

  //Updating
  update(updateUserDto: UpdateUserDto, userId: number) {
    return this.userRepository.update(userId, updateUserDto);
  }
 async getUser(@Param()id:number){
const found = await this.userRepository.findOneById( id );
return found;
  }
  
  //Deleting
  delete(userId: number){
    console.log("Deleted..");
    return this.userRepository.delete(userId);
    
  }
  //Creating account for the user
  createAccount(@Body() accountDto: AccountDto){
return this.accountRepository.save(accountDto);
  }


// a User logging in
  async login(@Body()body:Login){
    const log = await this.accountRepository.findOne({where: {...body}})
    if(!log){

      console.log("Account not found!");
    }
    else{
      return "Welcome to quick bite foods";
    }
  }

//USer booking/ordering the product
  async orders(accountId: number, body: OrderDto){
const found = await this.userRepository.findOneById(accountId);
if(!found){
return "Not found";
}
const orderName = this.orderRepository.create( {...body});
//orderName.account = found;
return this.orderRepository.save(orderName);
  }


//User Copmment on the product.
 async comments(accountId:number,body:CommentDto){
const findUser= await this.accountRepository.findOneById(accountId)
if(!findUser){
  console.log(" not found")

}
const create= this.commentsRepository.create({...body})

   create.account=findUser;

   return this.commentsRepository.save(create);
  }

}
