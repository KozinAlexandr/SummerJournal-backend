import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//Cлой контроллеров отвечает за обработку входящих запросов и возврат ответа клиенту.
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
