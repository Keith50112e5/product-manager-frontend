import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserControllerService } from 'src/app/openapi-client';

@Component({
  selector: 'pm-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  users: any;
  constructor(private userService: UserControllerService) {
    userService.getAllUsers().subscribe((v) => {
      this.users = v;
    });
  }
  display = (json: object) => Object.values(json);
}
