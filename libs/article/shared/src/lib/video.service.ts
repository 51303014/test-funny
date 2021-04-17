import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IArticle } from '@realworld/article/api-interfaces';
import { IConfigurationService } from '@realworld/shared/configuration';
import { BaseDataService  } from '@realworld/shared/foundation';
import { IVideoService } from './i-video.service';

@Injectable()
export class VideoService extends BaseDataService<IArticle> implements IVideoService {
    protected get endpoint(): string {
        return 'videos'
    }

    constructor(
        config: IConfigurationService,
        protected http: HttpClient
    ) {
        super(config, http)
    }
}
