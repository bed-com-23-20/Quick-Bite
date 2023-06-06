import { IsBoolean, IsDate, IsNumberString, IsString } from "class-validator";

export class UserDto{
   
    @IsString()
    productName: string;

    
    @IsString()
    productPrice: string;

    @IsBoolean()
    available: boolean;

    //@IsDate()
    expireDate: Date;
}