import {
  IsString,
  IsEmail,
  IsNotEmpty,
} from 'class-validator';

export class AuthTdo {
  @IsEmail()
  @IsNotEmpty()
  email: String;
  @IsString()
  @IsNotEmpty()
  password: String;
}
