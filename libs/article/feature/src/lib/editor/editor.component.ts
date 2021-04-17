import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUserService } from '@realworld/user/shared';
import { take } from 'rxjs/operators';
import { IVideoService } from '../../../../shared/src/lib/i-video.service';

@Component({
  selector: 'funny-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  form: FormGroup

  constructor(
    public userService: IUserService,
    private videoService: IVideoService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
  ) {
    this.initForm()
  }

  async ngOnInit() {
  }

  private initForm() {
    this.form = this.fb.group({
      url: [null, [Validators.required, Validators.maxLength(200)]],
    })
  }

  async submit() {
    const data = this.form.value
    const promise = this.videoService.create(data).pipe(take(1)).toPromise()
    const res = await promise
    if (res) {
      this.router.navigate(['/'])
    }
  }
}
