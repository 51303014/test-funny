import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Video } from './article.entity';
import { ArticleService } from './article.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Video]),
  ],
  providers: [ArticleService],
  exports: [ArticleService],
})
export class ArticleApiSharedModule {}
