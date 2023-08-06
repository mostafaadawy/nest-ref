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
- first is the name of the file followeb by  period then the type then .ts as follows:
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
- `npx prisma migrate dev` is used to migrate your new models and modifications
- 