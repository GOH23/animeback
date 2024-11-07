import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    @IsNotEmpty()
    Email: string;
    @IsNotEmpty()
    Password: string;
    Username: string;
}
