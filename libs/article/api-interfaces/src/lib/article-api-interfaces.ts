import { IBase } from '@realworld/shared/client-server'
import { IProfile } from '@realworld/user/api-interfaces'
import { Length } from 'class-validator'
export abstract class IArticle extends IBase {
  url: string
  author: IProfile
}

export abstract class INewArticle {
  @Length(1, 200)
  url: string
}

