import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../../user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    //хотим расшифровать токен с помощью ключа test
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false, //проверяем токен на срок годности heh, false - проверяет
      secretOrKey: 'test',
    });
  }

  //возвращает нужный объект, если удалось расшифровать токен
  async validate(payload: { sub: number; email: string }) {
    const data = { id: payload.sub, email: payload.email };
    const user = await this.userService.findByCond(data);

    if (!user) {
      throw new UnauthorizedException('Нет доступа к этой странице');
    }

    return {
      id: user.id,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}
