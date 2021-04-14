import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IArticle } from '@realworld/article/api-interfaces';

@Component({
  selector: 'funny-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListArticlesComponent implements OnInit {
  @Input()
  articles: IArticle[]

  constructor() { }

  ngOnInit(): void {
  }

}
