import {
  Controller,
  Get,
  Post,
  Req,
  Body,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthTdo } from './dto';
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}
  @Post('signup')
  signup(@Body('email') dto: AuthTdo) {
    console.log({ dto });
    return this.authService.signUp();
  }
  @Post('signin')
  signin() {
    return this.authService.login();
  }
}
