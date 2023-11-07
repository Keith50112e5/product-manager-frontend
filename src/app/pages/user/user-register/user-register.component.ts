import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserControllerService } from 'src/app/openapi-client';

@Component({
  selector: 'pm-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss'],
})
export class UserRegisterComponent {
  registerForm;
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
    this.registerForm = this.formBuilder.group({
      firstName: ['asdf', [required]],
      lastName: ['asdf', [required]],
      street: ['asdf', [required]],
      zip: ['asdfa', [required]],
      city: ['asdf', [required]],
      country: ['as', length(2, 2)],
      phone: ['asdf', [required]],
      mobilePhone: ['asdf', [required]],
      email: ['aa@aa.aa', [required, email]],
      password: ['0LEB3k\\y%/3;c:Qn<}>CK}RyHuT<B#i+lBrr', length(8, 64)],
    });
  }

  submit = (form: FormGroup) => {
    this.submitted = true;
    this.userService.register(form.value).subscribe((v) => {
      alert('ok');
      this.router.navigateByUrl('/users/login');
    });
  };
}
