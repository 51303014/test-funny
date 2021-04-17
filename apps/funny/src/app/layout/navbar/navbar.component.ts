import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { IUser } from '@realworld/user/api-interfaces';
import { IUserService } from '@realworld/user/shared';
import { Router } from '@angular/router';

@UntilDestroy()
@Component({
  selector: 'funny-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
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

}
