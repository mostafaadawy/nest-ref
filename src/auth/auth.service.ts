import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  login() {
    return { msg: 'I signin' };
  }
  async signUp(dto: AuthDto) {
    //generate the password hash
    const hash = await argon.hash(dto.password);
    //save the new user in the db
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        hash: hash,
      },
      // select: {
      //   id: true,
      //   email: true,
      //   createdAt: true,
      // },
    });
    //return saved user info except hash
    delete user.hash;
    return user;
  }
}
