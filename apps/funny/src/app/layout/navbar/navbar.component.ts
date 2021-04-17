import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { IUser } from '@realworld/user/api-interfaces';
import { IUserService } from '@realworld/user/shared';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'funny-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit{
  @Input() isAuth: boolean
  @Input() user: IUser

  constructor(private userService: IUserService,
              private router: Router,
  ) {
  }

  logout() {
    this.userService.logout()
    this.router.navigate(['/'])
  }

 async ngOnInit() {
    const user = (await this.userService.getCurrentUser().pipe(take(1)).toPromise())?.detailData
  }

}
