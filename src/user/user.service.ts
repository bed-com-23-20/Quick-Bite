import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  UserService: any;

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

  findAll() {
    return this.UserService.findAll(); //`This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(updateUserDto: UpdateUserDto, userId: number) {
    return {body: updateUserDto, userId};
  }

  remove(userId: number) {
    return {userId};
  }
}
