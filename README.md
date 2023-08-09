<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

# Custom Notes and Tips

- try to be restricted by the naming convinstion
- first is the name of the file followeb by period then the type then .ts as follows:
  ```sh
  name.type.ts
  product.module.ts
  ```
  - we can use the package manger generator to generate complete module same as artisan in php
  ```
  nest g module user
  // just used to generate user module g fro generate
  // you can check nest help to see other options
  ```
  - it ios not creating a file only with its template but it creats the folder if not exist and modify the mail module imports to contain the new module
  - you can generate all service controller module just as we done in module

## Using Docker for virtual database

```sh
version: '3.8'
services:
  dev-db:
    image: postgres:13
    ports:
      - 5432:5432
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: 123
      POSTGRESS_DB: nest
    networks:
      - mostafa
networks:
  mostafa:
```

- run the composer using the next commans

```
docker compose up dev-db -d
```

- where **dev-db** is the name of the service in previoius yml code and `-d` for running in background

# to use database we should install [prisma](https://www.prisma.io/) query builder ORM like elquant in laravel

- install prisma schema and cli

```
npm i -D prisma
```

- `D` install in development `i` means install
- and for the client for also typescript

```
npm i @prisma/client
```

# using Prisma

- create ini prisma file

```
npx prisma init
```

- this generates `prisma folder and insiide it schema template file`
- and `.env` file
- modify the schema file inside prisma created folder and just to add a new table model we can do insert such next code snippets

```
model user{
  id Int @id @default(autoincrement())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  email String
  hash String
  firstName String?   //? -> optional
  LastName String?
}

model bookmark{
  id Int @id @default(autoincrement())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  type String
  description String?
  link String?
}
```

- modifiy the enviroment varaible inside .env that is used for connection according top the enviroment you choosed in the docker enviroments as follows

```
//DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
DATABASE_URL="postgresql://postgres:123@localhost:5432/nest?schema=public"
```

- from `docker ps ` command or graphically from the docker desktop we can see opur created docker virtual module
- `npx prisma --help` shows all the commands that you can use from prisma
- `npx prisma studio` generate on broswer graphic representation
- `npx prisma migrate dev` is used to migrate your new models and modifications and create sql files
- what is really nice from prisma is it run generate `npx prosma generate` automatically that creates interfaces for the generated module so that we can use it as models in laravel all that done automatically just by migrating
- `npx prisma studio` is used to show such as phpmyadmin

# note

- to set format on save from extention install prettier formatter then search setting for formatting then check it to anable it on save then in the edit in json in the same page write ` "editor.defaultFormatter": "esbenp.prettier-vscode"` in the setting json file
- you can now adapt line width in prettier for example add to prettierrc json `"printWidth": 50"`

# Create Prisma Module to be used as module for models to extract data using service

- `nest g module prisma` and `nest g service prisma`
- in case we want to generate service without testing service file `nest g service prisma --no-spec`
- in the `service` we will create our logics tthat connects to database such as model in laravel
- for that issue in `prisma service class` make it extending `PrismaClient`

# Solving Exporting error

- when just we try to use service from prisma module to other module although that we imported it to the module of the other controller but we got this message

```
ERROR [ExceptionHandler] Nest can't resolve dependencies of the AuthService (?). Please make sure that the argument PrismaService at index [0] is available in the AuthModule context
```

- that is because if other module so we have to export it first

# how about importing database module to every module

- instead of importing it indedidually we can use `@Global()` decoration on the required module which is prisma module to allow these modules to other modules by importing it only in the main module and set it as global
- now you can remove its import from other indevidual module as long as it is seen and imported from the main module and it is set to be global module

# Engough for configuration lets logic programming by writing our signing up and loging function

- we can lof the request as follows

```
signup(@Req() request: Request) {
    console.log('request', request);
    return this.authService.signUp();
  }
```

- using `@Body()` decoration for requiring the data Object from request dto

# Creating DTO internace

- using `interfaces` or may be as we can see next `classes` that holds our data values helps in the following:
  - declrearing our varaibles with its types to avoid using `any` for typescripting
  - by defining types we can verify and validate our received data easly
- it is recommended when we have more that data interface or class to create a folder contains index file and export everything from other adjacent files in the same folder and that helps importing all exported interfaces by just importing this colder name that will access its index by default so this index file will export all other other modules

# Using Pips (function that transform data such as parsing parseInt where it stop and return mismatch datatype even before validation) check next code

```
  @Post('signup')
  signup(
    @Body('email') email: string,
    @Body('password', ParseIntPipe)
    password: string,
  ) {
    console.log({
      email,
      typeOfEmail: typeof email,
      password,
      typeofPassword: typeof password,
    });
    return this.authService.signUp();
  }
```

- if you send request with error missing or string instead of number you will get next respoce without even log function in previous code is eccessed

```
{
    "message": "Validation failed (numeric string is expected)",
    "error": "Bad Request",
    "statusCode": 400
}
```

# Using from Interface and Validation

- first install validation library `npm i class-validator class-transformer`
- convert AuthDto interface to class to use decorator @IsEmail and others to become as follows:

```
  import {
    IsString,
    IsEmail,
    IsNotEmpty,
  } from 'class-validator';
export class AuthDto {
@IsEmail()
@IsNotEmpty()
email: String;
@IsString()
@IsNotEmpty()
password: String;
}
```

dont forget to return the code to

```

@Post('signup')
signup(@Body() dto: AuthDto) {
console.log({ dto });
return this.authService.signUp();
}

```

# if sent missing data request validation is still not working but why?

- that is because you should import pipevalidation globally to main function as follows:

````
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();```
````

- now try sending from postman

# What is whitelist

- it is an option that we can call in the configuration of global validator in main ts file to just clean the request from un required data that is not in interface check the code

```
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true }),
  );
  await app.listen(3000);
}
bootstrap();

```

- you can check by send from bost man unrequired key and value in the body
- where it is just compare received data with the interface and then filtter un reqyuired data

# Auth.service singning up

- first we need to install argon2 `npm i argon2` the library thaty we will use to hash our code then write the code as follows :

```

```

- second we need not to send all data espeicaly hash so we have two options
  - first is to select the required data to send
- second is to delete prohibted to send back such as password hash value

```
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
```

- note that argon is async function

# Edit Prisma module name to be @@map users and @@map bookmarks and add @unique to email

- we can also add many to one relation where every user can have many bookmarks
-

```
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User{
  id Int @id @default(autoincrement())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  email String @unique
  hash String
  firstName String?   //? -> optional
  LastName String?
  bookmarks Bookmark[]

  @@map("users")
}

model Bookmark{
  id Int @id @default(autoincrement())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  type String
  description String?
  link String?

  userId Int
  user User @relation(fields:[userId], references: [id])

  @@map("bookmarks")
}
```

- `npx prisma migrate dev`

# note that `nest` is `cli` package command do not need `run time` but prisma is apackage so it needs `npx`

- also note that i deleted my migration by hand whichis not recommended because prisma client creates backend code for your models so it is not right to delete it manually but the righyt thing is to modify using the cli command
- so to solve previous error the only solution that is not right is to uninstall prisma client `npm uninstall @prisma/client`
-

# returning to our code

- now if we send user registeration data with duplicated email it returns server error which is not handeled error and to handel it
- we can handel it using try catch method and we can defined the error if duplication then send credential taken message check next code snippet:

```
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
```

# signing in logging in

- check next code

```
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
```

# lets create some useful scripts

- in package.json we will add some scripts to do migration and run as follows

```
 "prisma:dev:deploy": "prisma migrate deploy",
    "prisma:dev:studio": "prisma studio",
    "db:dev:rm": "docker compose rm dev-db -s -f -v",
    "db:dev:up": "docker compose up dev-db -d",
    "db:dev:restart": "npm run db:dev:rm && npm run db:dev:up && sleep 1 && npm run prisma:dev:deploy",
```

- note that in calling subscript in side script like composer remove and up we have to call npm run or yarn foreach one also we need to leave time splee time in seconds just to be sure that the docker is up
- the script is simply remove the image and container by force -f after stoping it -s and -v then creat another instance again then wait for creation then we use deploy prisma not migrate cause the deference is that deploy just apply existing migration not migrate new thing and if we use migrate dev it can also apply but it requires some user inputs

# Token JWT and config package to import secret key to it easly

- install config `npm i @nestjs/config`
- add configmodule to app modules

```
@Module({
  imports: [
    AuthModule,
    UserModule,
    BookmarkModule,
    PrismaModule,
    ConfigModule.forRoot({}),
  ],
})
export class AppModule {}
```

- how to use?
- as we need it in prisma service so we can call it in contructor where it is inectable means able to be injected then when calling config it will get varable from ,nv file

```
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(config: ConfigService) {
    super({
      datasources: {
        db: {
          url: config.get('DATABASE_URL'),
        },
      },
    });
  }
}
```

it will not work untill we make it global config module and that can be done from app module "main module" and set it `ConfigModule.forRoot({isGlobale:true}),`

# Passport Jwt

- first install passport from nest to insert module for it with its decoration then jwt also module and then normal passport-jwt and adding its typescripyt for dev as follows:

```
npm i @nestjs/passport @nestjs/jwt passport-jwt
npm i -D @types/passport-jwt

```

- inside auth module where we will use
- import its module `imports: [JwtModule.register({})],` in auth.module
- then inject its service in the required module service by adding it in its constructor then use it then create signTiken

```
import {
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}
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
    return await this.signToken(
      user.id,
      user.email,
    );
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
  async signToken(
    userId: number,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email,
    };
    const secret = this.config.get('JWT_SECRET');
    const token = this.jwt.sign(payload, {
      expiresIn: '15m',
      secret: secret,
    });
    return { access_token: token };
  }
}

```

- now we can test it using postman

# Verifying token

- steps goes as a stratgey where it will extract key and then verfy
- in nest every thing is modules and decorator
- config is module
- as a rule all required and shared modules should be global
- create a seperate folder strargy for the token
- the strategy file class will looks llike as follows:

```
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import {
  ExtractJwt,
  Strategy,
} from 'passport-jwt';
@Injectable()
export class JwtStrategy extends PassportStrategy(
  Strategy,
) {
  constructor(config: ConfigService) {
    super({
      JwtFromRequest:
        ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get('JWT_SECRET'),
    });
  }
}

```

- do not forget to set it in the provider in auth.module as it will also provide a service in that module
- and we just put it in providers nor module where we already added module jwt but this is another service?????????????? why provider not (creating module that imhas this service then importing it)

- now the service provider is ready
- note this strategy for token can also exist others for logging using facebook and google and so on

# creating user to check the authentication

- just create get in user controller

# Using Guards such as midleware

- we can use nestjs passport guard

# NOte we can navoigate librarys by pressing it for example we can check passport jwt to find out what modules that we can use

- note that vthe startegy is change as follows
- ```
  import { Injectable } from '@nestjs/common';
  import { ConfigService } from '@nestjs/config';
  import { PassportStrategy } from '@nestjs/passport';
  import {
    ExtractJwt,
    Strategy,
  } from 'passport-jwt';
  @Injectable()
  export class JwtStrategy extends PassportStrategy(
    Strategy,
    'jwt',
  ) {
    constructor(config: ConfigService) {
      super({
        jwtFromRequest:
          ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.get('JWT_SECRET'),
      });
    }
    validate(payload: any) {
      console.log({
        payload,
      });
      return payload;
    }
  }
  ```

- first edit to add `'jwt'` after strategy that is the name of the stratygy that we take to verify whered if login by facebook we can edit this jwt ket to be facebook or if session oit will be session
- note that if we forget to add it nothing happen because it is only one startegy and it will be sey by default
- **the most imnportant is adding `validate` function that function that if validate it will work as a birdge to send the suspended payload in this current guard stratyegy to the next guard or midelware or even if it was the last guard to the controller that is only if it validate**
- in user controller that is how we call the midelware/guard

```
import {
  Controller,
  Get,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  getMe() {
    return 'user info';
  }
}
```

- just use the decoration `@UseGuards` we can add alot of gurds
- this current gurad argument will be the name of the strartegy used
