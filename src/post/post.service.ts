import { Injectable, NotFoundException } from '@nestjs/common';
import { PostModel } from '../database';
import { CreatePostDto } from './dto';

@Injectable()
export class PostService {
  async create(data: CreatePostDto) {
    const post = await PostModel.query().insert(data);
    return { post };
  }

  async findOne(id: number) {
    const post = await PostModel.query().findById(id);

    if (!post) {
      throw new NotFoundException('Post not found');
    }
    return { post };
  }

  // return all post
  async findAll() {
    const post = await PostModel.query();
    return { post };
  }

  // Delete post by ID
  async deletePost(id: number) {
    const post = await PostModel.query().deleteById(id);

    if (!post) {
      throw new NotFoundException('Post not found');
    }
    return { post };
  }

  // Update post by ID
  async UpdatePost(id: number, data: CreatePostDto) {
    const post = await PostModel.query().findById(id);

    if (!post) {
      throw new NotFoundException('Post not found');
    }

    const postUpdated = await PostModel.query().findById(id).patch(data);
    return { postUpdated };
  }
}
