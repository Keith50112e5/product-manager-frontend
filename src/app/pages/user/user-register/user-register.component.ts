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
      firstName: ['', [required]],
      lastName: ['', [required]],
      street: ['', [required]],
      zip: ['', [required]],
      city: ['', [required]],
      country: ['', length(2, 2)],
      phone: ['', [required]],
      mobilePhone: ['', [required]],
      email: ['', [required, email]],
      password: ['', length(8, 64)],
    });
  }

  submit = (form: FormGroup) => {
    this.submitted = true;
    if (!form.valid) return;
    this.userService.register(form.value).subscribe((v) => {
      this.router.navigateByUrl('/users/login');
      alert('User registered.');
    });
  };
}
