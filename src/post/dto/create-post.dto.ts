import { IsString } from 'class-validator';
import { IPost } from '../../database';

export class CreatePostDto implements Omit<IPost, 'id'> {
  @IsString({
    message: 'Title is required',
  })
  title: string;

  @IsString({
    message: 'Body is required',
  })
  body: string;
}
