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

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
    @InjectRepository(Ordertable)
    private orderRepository: Repository<Ordertable>,
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


  async orders(userId: number,accountId: number){
const found = await this.userRepository.findOneById(userId);
if(!found){
return "Not found";
}
const ordeName = this.orderRepository.create( {...found},);
return this.orderRepository.save(ordeName);
  }

}
