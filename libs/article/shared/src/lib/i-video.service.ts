import { Injectable } from '@angular/core';
import { IArticle } from '@realworld/article/api-interfaces';
import { IBaseDataService  } from '@realworld/shared/foundation';
import { VideoService } from './video.service';

@Injectable({
    providedIn: 'root',
    useClass: VideoService
})
export abstract class IVideoService extends IBaseDataService<IArticle> {
}
