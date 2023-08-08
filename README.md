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
