import { Model } from 'objection';
import { DatabaseTables } from '../database.table';
import { IPost } from './post.interface';

export class PostModel extends Model implements IPost {
  id: IPost['id'];
  title: IPost['title'];
  body: IPost['body'];

  static get tableName() {
    return DatabaseTables.posts;
  }
}
