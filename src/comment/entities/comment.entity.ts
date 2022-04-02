import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { UserEntity } from '../../user/entities/user.entity';
import { PostEntity } from '../../post/entities/post.entity';

@Entity('comments')
export class CommentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  //Каждый поль-ль может оставлять по 1 комменту и
  //для каждого коммента мы прикручиваем id пользователя
  @ManyToOne(() => UserEntity, { nullable: false })
  //Далее говорим, что нужно join-it с нашей колонкой
  //при помощи колонки userId
  //Вот так будет происходить связь между таблицей
  //комментариев и таблицей user
  @JoinColumn({ name: 'userId' })
  user: UserEntity;

  //Делаем тоже самое для post, а nullable запрещает создать
  //комментарий без userId and postId
  @ManyToOne(() => PostEntity, { nullable: false })
  @JoinColumn({ name: 'postId' })
  post: UserEntity;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
