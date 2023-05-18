import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class AccountDto{

@IsString()
firstname: string;

@IsString()
lastname: string;

@IsEmail()
email: string;
@IsNumber()

phonenumber: number;
@IsNotEmpty()
location: string;

datecreated: Date;
@IsNotEmpty()
password: number;

}