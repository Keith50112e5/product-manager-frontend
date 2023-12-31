import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserControllerService } from 'src/app/openapi-client';

@Component({
  selector: 'pm-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent {
  loginForm;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserControllerService
  ) {
    if (sessionStorage.getItem('pm_jwt')) sessionStorage.removeItem('pm_jwt');

    const { email, minLength, maxLength, required } = Validators;
    const length = (min: number, max: number) => [
      minLength(min),
      maxLength(max),
    ];
    this.loginForm = formBuilder.group({
      email: ['', [required, email]],
      password: ['', length(8, 64)],
    });
  }

  submit = (form: FormGroup) => {
    this.submitted = true;
    if (!form.valid) return;
    this.userService.login(form.value).subscribe((v) => {
      sessionStorage.setItem('pm_jwt', '' + v.token);
      this.router.navigateByUrl('/products');
    });
  };
}
