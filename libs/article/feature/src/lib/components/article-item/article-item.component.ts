import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IArticle } from '@realworld/article/api-interfaces';

@Component({
  selector: 'funny-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleItemComponent implements OnInit {
  @Input() article: IArticle

  @Output() toggleFavorite = new EventEmitter<{favorite: boolean, slug: string}>()
  safeSrc: string;

  constructor() {

  }

  async ngOnInit() {
  }

}
