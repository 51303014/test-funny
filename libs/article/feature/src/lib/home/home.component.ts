import { Component, OnInit } from '@angular/core';
import { IUserService } from '@realworld/user/shared';
import { IArticle } from '@realworld/article/api-interfaces';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { IVideoQuery, IVideoService } from '@realworld/article/shared';

@Component({
  selector: 'funny-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dataSource: Observable<IArticle[]>

  constructor(
    public userService: IUserService,
    private videoService: IVideoService,
  ) {}

  async ngOnInit() {
    const user = (await this.userService.getCurrentUser().pipe(take(1)).toPromise())?.detailData
    this.dataSource = this.videoService.getAll({
      limit: 10,
      pageIndex: 0,
      order: {orderBy: 'createdAt' as any, orderType: 'desc'}
  }, <IVideoQuery>{author: user.email}).pipe(map(res => res.data))

  }
}
