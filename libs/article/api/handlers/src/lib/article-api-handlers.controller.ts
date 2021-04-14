import { Body, Controller, Get, Post, Query, Req,  } from '@nestjs/common';
import { IArticle, INewArticle } from '@realworld/article/api-interfaces';
import { Article, ArticleService } from '@realworld/article/api/shared';
import { CREATED_MSG } from '@realworld/shared/api/constants';
import { mapQueriesToFindManyOptions } from '@realworld/shared/api/foundation';
import { ActionSuccessResponse, IResponse, ListSuccessResponse } from '@realworld/shared/client-server';
import { StringUtil } from '@realworld/shared/string-util';
import { SkipAuth, UserService } from '@realworld/user/api/shared';
import { Like } from 'typeorm';

@Controller()
export class ArticleApiHandlersController {
    constructor(
        private articleService: ArticleService,
        private userService: UserService,
    ) { }

    // Article apis

    @Post('articles')
    async create(@Req() req, @Body() data: Partial<INewArticle>): Promise<IResponse<IArticle>> {
        const article: Partial<Article> = {
            ...data,
            authorId: req?.user?.sub,
            slug: StringUtil.asciiSlug(data.title) + '-' + new Date().getTime()
        }
        await this.articleService.insert(article)
        return new ActionSuccessResponse<IArticle>({
            message: CREATED_MSG,
            data: await this.mapToResponseArticle(article?.authorId, article as Article)
        })
    }

    @SkipAuth()
    @Get('articles')
    async findAll(@Req() req, @Query() query): Promise<IResponse<IArticle>> {
        const {tag, author, favorited} = query
        delete query.author
        delete query.tag
        delete query.favorited

        const jwtInfo = this.userService.getJwtInfo(req)

        if (author) {
            const user = await this.userService.findOne({username: author})
            if (user) {query.authorId = user.id}
        }
        if (tag) { query.tagList = Like(`%${tag}%`) }

        const options = mapQueriesToFindManyOptions<Article>(query, 'title', 'slug', 'shortDescription', 'body')

        if (favorited) {
            const user = await this.userService.findOne({username: favorited});
            if (user) {
               const [res, count] = await this.articleService.repository.createQueryBuilder('article')
                .innerJoinAndSelect("favorite", "favorite", "article.slug = favorite.articleSlug")
                .where(options?.where)
                .andWhere('favorite.userid = :userId', {userId: user.id})
                .take(options?.take)
                .skip(options?.skip)
                .orderBy('favorite.createdAt', 'DESC')
                .getManyAndCount()

                return new ListSuccessResponse<IArticle>({
                    listData: await Promise.all(res.map(a => this.mapToResponseArticle(jwtInfo?.sub, a))),
                    total: count
                })
            }
        }

        const res = await this.articleService.findAll(options)
        return new ListSuccessResponse<IArticle>({
            listData: await Promise.all(res.map(a => this.mapToResponseArticle(jwtInfo?.sub, a))),
            total: await this.articleService.count(options)
        })
    }

    mapToResponseArticle = async (requestUserId: string, article: Article): Promise<IArticle> => {
        const user = await this.userService.findOne({id: article?.authorId})
        return {
            ...article,
            favorited: null,
            favoritesCount: null,
            author: await this.userService.getProfile(requestUserId, user)
        }
    }
}
