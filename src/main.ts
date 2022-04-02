import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}

bootstrap();

/*Декораторы или аннотации — наследники аспектов,
которые позволяют декларативно описывать логику,
модифицировать поведение классов, их свойств, аргументов и методов.

Технически декораторы — это просто функции, но их вызовом полностью
управляет компилятор.Важная особенность заключается в том,
что в зависимости от контекста, сигнатуры аргументов будут различаться.
*/
