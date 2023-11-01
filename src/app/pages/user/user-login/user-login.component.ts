import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'pm-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {
  loginForm;
  constructor(private _fb: FormBuilder) {
    const {email,minLength, maxLength, required} = Validators
    this.loginForm = this._fb.group({
      email: ["", [required,email]],
      password: ["", [required,minLength(8),maxLength(64)]]
    });
  }

  logForm() {
    console.log(this.loginForm)
    alert(JSON.stringify(this.loginForm.value))
  }
}
