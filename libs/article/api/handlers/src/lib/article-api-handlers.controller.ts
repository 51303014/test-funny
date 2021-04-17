import { Body, Controller, Get, Post, Query, Req } from '@nestjs/common';
import { IArticle, INewArticle } from '@realworld/article/api-interfaces';
import { ArticleService, Video } from '@realworld/article/api/shared';
import { CREATED_MSG } from '@realworld/shared/api/constants';
import { mapQueriesToFindManyOptions } from '@realworld/shared/api/foundation';
import { ActionSuccessResponse, IResponse, ListSuccessResponse } from '@realworld/shared/client-server';
import { SkipAuth, UserService } from '@realworld/user/api/shared';

@Controller()
export class ArticleApiHandlersController {
  constructor(
    private videoService: ArticleService,
    private userService: UserService
  ) {
  }

  // Article apis

  @Post('videos')
  async create(@Req() req, @Body() data: Partial<INewArticle>): Promise<IResponse<IArticle>> {
    const video: Partial<Video> = {
      ...data,
      authorId: req?.user?.sub
    };
    await this.videoService.insert(video);
    return new ActionSuccessResponse<IArticle>({
      message: CREATED_MSG,
      data: await this.mapToResponseArticle(video?.authorId, video as Video)
    });
  }

  @SkipAuth()
  @Get('videos')
  async findAll(@Req() req, @Query() query): Promise<IResponse<IArticle>> {
    const { author } = query;
    delete query.author;
    const jwtInfo = this.userService.getJwtInfo(req);
    if (author) {
      const user = await this.userService.findOne({ email: author });
      if (user) {
        query.authorId = user.id;
      }
    }

    const options = mapQueriesToFindManyOptions<Video>(query, 'url');
    const res = await this.videoService.findAll(options);
    return new ListSuccessResponse<IArticle>({
      listData: await Promise.all(res.map(a => this.mapToResponseArticle(jwtInfo?.sub, a))),
      total: await this.videoService.count(options)
    });
  }

  mapToResponseArticle = async (requestUserId: string, video: Video): Promise<IArticle> => {
    const user = await this.userService.findOne({ id: video?.authorId });
    return {
      ...video,
      author: await this.userService.getProfile(requestUserId, user)
    };
  };
}
