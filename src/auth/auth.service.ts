import {
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async login(dto: AuthDto) {
    //find the user email
    const user =
      await this.prisma.user.findUnique({
        where: { email: dto.email },
      });
    // if user not exist throw exception
    if (!user)
      throw new ForbiddenException(
        'Credentials incorrect',
      );
    // compare passwords
    const pwMatch = await argon.verify(
      user.hash,
      dto.password,
    );
    // if password is incorrect throw exception
    if (!pwMatch)
      throw new ForbiddenException(
        'Credentials incorrect',
      );
    // send back the user
    delete user.hash;
    return user;
  }
  async signUp(dto: AuthDto) {
    //generate the password hash
    const hash = await argon.hash(dto.password);
    //save the new user in the db
    try {
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
    } catch (error) {
      if (
        error instanceof
        PrismaClientKnownRequestError
      ) {
        if (error.code === 'P2002') {
          throw new ForbiddenException(
            'Credential taken',
          );
        }
      }
      throw error;
    }
  }
}
