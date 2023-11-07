import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequestDto, UserControllerService } from 'src/app/openapi-client';

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
    const { email, minLength, maxLength, required } = Validators;
    const length = (min: number, max: number) => [
      minLength(min),
      maxLength(max),
    ];
    this.loginForm = this.formBuilder.group({
      email: ['aa@aa.aa', [required, email]],
      password: ['0LEB3k\\y%/3;c:Qn<}>CK}RyHuT<B#i+lBrr', length(8, 64)],
    });
  }

  submit = (form: FormGroup) => {
    this.submitted = true;
    if (!form.valid) return;
    this.userService.login(form.value as LoginRequestDto).subscribe((v) => {
      sessionStorage.setItem('pm_jwt', '' + v.token);
    });
  };
}
