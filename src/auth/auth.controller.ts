import {
  Controller,
  Get,
  Post,
  Req,
  Body,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}
  @Post('signup')
  signup(@Body() dto: any) {
    console.log('dto', dto);
    return this.authService.signUp();
  }
  @Post('signin')
  signin() {
    return this.authService.login();
  }
}
