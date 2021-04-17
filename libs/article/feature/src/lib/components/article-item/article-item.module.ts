import { NgModule } from '@angular/core';
import { SharedCommonModule } from '@realworld/shared/common';
import { ArticleItemComponent } from './article-item.component';
import { CustomizePipeModule } from '@realworld/shared/directives';

@NgModule({
  imports: [SharedCommonModule, CustomizePipeModule],
  declarations: [ArticleItemComponent],
  exports: [ArticleItemComponent],
})
export class ArticleItemModule {}
