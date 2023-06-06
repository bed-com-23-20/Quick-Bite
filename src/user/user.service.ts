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
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  orderModel: any;
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

storeFood(@Body() createUserDto: UserDto) {
  const createProduct = this.userRepository.create({...createUserDto})
  return this.userRepository.save(createProduct);
}
  get():Promise<User[]>{ 
    return this.userRepository.find(); 
  }

  //Updating
  async update(updateUserDto: UserDto, userId: any) {

    const update = await this.userRepository.findOneById(userId);

    const updated =this.userRepository.create({...update ,...updateUserDto});
    return this.userRepository.save(updated)
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
    const log = await this.accountRepository.findOneBy({...body})

    
    if(log !=null){
console.log(log)
      //return "Welcome to quick bite foods";
    }
    else{
      console.log("Account not found!");
    }
  }

//USer booking/ordering the product
//   async orders(accountId: number, body: OrderDto){
// const found = await this.userRepository.findOneById(accountId);
// if(!found){
// return "Not found";
// }
// return found;
//   }
//   async creatOrder(OrderDto: OrderDto){
//       const order = await this.orderRepository.create(OrderDto);
//       return this.orderRepository.save(order);

//   }

async creatOrder(
  accountId: number,
  userId: number,
  body:OrderDto,
): Promise <Ordertable>{
   const accountt = await this.accountRepository.findOne({
    where : {
      accountId
    },
   });
    const user = await this.userRepository.findOne({
      where : {
        id : userId
      },
    });
if(accountt != null && user != null){
const merg =await this.orderRepository.create({...body})

  merg.productName =user.productName
  merg.productPrice = user.productPrice
  merg.account = accountt
  merg.user = user

  const merged = await this.orderRepository.create({...merg})
 return  this.orderRepository.save(merged);
}
console.log("can not book")
    //const order = new Ordertable();

    // order.productName = user.productName;
    // order.productPrice = user.productPrice;
    // order.expireDate =  user.expireDate;
    // order.available = user.available
    // order.user = user;
    //order.account = accountt

   

}














// const orderName = this.orderRepository.create( {...body});
// //orderName.account = found;
// return this.orderRepository.save(orderName);
//   }
// async listOrderByUser(accountId: number, body:OrderDto){
//   const order = await this.orderRepository.findOneBy(accountId);

// async creatOrder(OrderDto: OrderDto){
//   const order = await this.orderRepository.create(OrderDto);
//   return order

// }
// }


//User Comment on the product.
 async comments(accountId:number,body:CommentDto){
const findUser= await this.accountRepository.findOneById(accountId)
if(!findUser){
  console.log(" not found")

}

const create= this.commentsRepository.create(body)

   create.account=findUser;

   return this.commentsRepository.save(create);
  }

}
