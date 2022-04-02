import { Injectable } from '@nestjs/common';

//Бизнес логика тут
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
