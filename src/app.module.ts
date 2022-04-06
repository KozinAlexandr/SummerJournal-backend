import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/entities/user.entity';
import { PostModule } from './post/post.module';
import { PostEntity } from './post/entities/post.entity';
import { CommentModule } from './comment/comment.module';
import { CommentEntity } from './comment/entities/comment.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'sjournal',
      entities: [UserEntity, PostEntity, CommentEntity],
      //чтобы не создавать миграции true, но если заливать в продакшн
      //ставить false, чтобы при билде не стирались данные
      synchronize: true,
    }),
    UserModule,
    PostModule,
    CommentModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

//Модуль-это класс с декоратором Module(). Декоратор Module() предоставляет метаданные,
//которые Nest использует для организации структуры приложения. Каждое приложение Nest имеет как минимум один модуль, корневой модуль.
//В Nest модули по умолчанию являются синглетонами, поэтому вы можно без труда делить один и тот же экземпляр компонента между двумя и более модулями.
