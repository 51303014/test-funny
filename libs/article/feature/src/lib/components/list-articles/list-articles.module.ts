import { NgModule } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedCommonModule } from '@realworld/shared/common';
import { ListArticlesComponent } from './list-articles.component';
import { ArticleItemModule } from '../article-item/article-item.module';

@NgModule({
    declarations: [ListArticlesComponent],
    exports: [ListArticlesComponent],
  imports: [
    SharedCommonModule,
    NgbPaginationModule,
    ArticleItemModule
  ]
})
export class ListArticlesModule {}
