import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
 
  // UserService: any;
  // usersRepository: any;

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,

  ){}

  get():Promise<User[]>{ 
    return this.userRepository.find(); 
  }

  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  // findAll() {
  //   return this.UserService.findAll(); //`This action returns all user`;
  // }

  // findOne(userId: number){
  //   return this.userRepository.findOne({where:{id: userId}});  
  // }

  // findOne(id: number): Promise<User[]> {
  //   return this.usersRepository.findOneBy({ id });
  // }


  //Updating
  update(updateUserDto: UpdateUserDto, userId: number) {
    return this.userRepository.update(userId, updateUserDto);
  }

  // remove(userId: number) {
  //   return {userId};
  // }

  // Fetching/retriving
  show(userId: number){
    return this.userRepository.findOne({where: {id : userId}});
  }
  
  //Deleting
  delete(userId: number){
    return this.userRepository.delete(userId);
  }
}
