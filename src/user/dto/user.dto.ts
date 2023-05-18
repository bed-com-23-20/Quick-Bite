import { IsNumberString, IsString } from "class-validator";

export class UserDto{
   
    @IsString()
    productName: string;

    
    @IsNumberString()
    productPrice: string;

  
    available: boolean;

  
    expireDate: Date;
}