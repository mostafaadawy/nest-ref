import {
  Controller,
  Get,
  Post,
  Req,
  Body,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}
  @Post('signup')
  signup(@Body() dto: AuthDto) {
    //console.log({ dto });
    return this.authService.signUp(dto);
  }
  @Post('signin')
  signin(@Body() dto: AuthDto) {
    //console.log(dto);
    return this.authService.login(dto);
  }
}
