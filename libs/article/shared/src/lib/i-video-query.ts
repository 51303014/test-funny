import { IQuery } from '@realworld/shared/foundation';

export interface IVideoQuery extends IQuery {
    tag: string
    favorited: string
    author: string
}
