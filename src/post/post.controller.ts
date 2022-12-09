import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreatePostDto } from './dto';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  @Inject(PostService)
  private readonly postService: PostService;

  @Post()
  async create(@Body() data: CreatePostDto) {
    return this.postService.create(data);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) postId: number) {
    return this.postService.findOne(postId);
  }

  @Get()
  async findAll() {
    return this.postService.findAll();
  }

  @Delete(':id')
  async deletePost(@Param('id', ParseIntPipe) postId: number) {
    return this.postService.deletePost(postId);
  }

  @Put(':id')
  async updatePost(
    @Param('id', ParseIntPipe) postId: number,
    @Body() data: CreatePostDto,
  ) {
    return this.postService.UpdatePost(postId, data);
  }
}
