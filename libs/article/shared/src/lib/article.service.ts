import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IArticle } from '@realworld/article/api-interfaces';
import { IConfigurationService } from '@realworld/shared/configuration';
import { BaseDataService  } from '@realworld/shared/foundation';
import { IArticleService } from './i-article.service';

@Injectable()
export class ArticleService extends BaseDataService<IArticle> implements IArticleService {
    protected get endpoint(): string {
        return 'articles'
    }

    constructor(
        config: IConfigurationService,
        protected http: HttpClient
    ) {
        super(config, http)
    }
}
