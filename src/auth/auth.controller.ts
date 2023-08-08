import {
  Controller,
  Get,
  Post,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}
  @Post('signup')
  signup(@Req() request: Request) {
    console.log('request', request);
    return this.authService.signUp();
  }
  @Post('signin')
  signin() {
    return this.authService.login();
  }
}
