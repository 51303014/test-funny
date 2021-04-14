import { Injectable } from '@angular/core';
import { IArticle } from '@realworld/article/api-interfaces';
import { IBaseDataService  } from '@realworld/shared/foundation';
import { ArticleService } from './article.service';

@Injectable({
    providedIn: 'root',
    useClass: ArticleService
})
export abstract class IArticleService extends IBaseDataService<IArticle> {
}
