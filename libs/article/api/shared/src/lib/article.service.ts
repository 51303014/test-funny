import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from '@realworld/shared/api/foundation';
import { Repository } from 'typeorm';
import { Video } from './article.entity';

@Injectable()
export class ArticleService extends BaseService<Video> {
    constructor(
        @InjectRepository(Video)
        repository: Repository<Video>
    ) {
        super()
        this.repository = repository
    }
}
