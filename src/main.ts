import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [/^(.*)/],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 200,
    credentials: true,
    allowedHeaders:
      'Origin,X-Requested-With,Content-Type,Accept,Authorization,authorization,X-Forwarded-for',
  });

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3001);
}

bootstrap();

/*Декораторы или аннотации — наследники аспектов,
которые позволяют декларативно описывать логику,
модифицировать поведение классов, их свойств, аргументов и методов.

Технически декораторы — это просто функции, но их вызовом полностью
управляет компилятор.Важная особенность заключается в том,
что в зависимости от контекста, сигнатуры аргументов будут различаться.
*/
