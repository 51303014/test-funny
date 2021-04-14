import { Component, OnInit } from '@angular/core';
import { IUserService } from '@realworld/user/shared';
import { IArticleService } from '@realworld/article/shared';
import { IArticle } from '@realworld/article/api-interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'funny-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dataSource: Observable<IArticle[]>

  constructor(
    public userService: IUserService,
    private articleService: IArticleService,
  ) {}

  ngOnInit() {
    this.dataSource = this.articleService.getAll({
      limit: 10,
      pageIndex: 0,
      order: {orderBy: 'createdAt' as any, orderType: 'desc'}
  }, null).pipe(map(res => res.data))

  }
}
