import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsNumberString, IsString } from 'class-validator';

export class UpdateUserDto {

    productName: string;
    productPrice: string;
    available: boolean;
    expireDate: Date;
}
