import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';

const routes: Routes = [
  { path: '', loadComponent: () => UserListComponent },
  { path: ':id', loadComponent: () => UserDetailComponent },
  { path: 'login', loadComponent: () => UserLoginComponent },
  { path: 'register', loadComponent: () => UserRegisterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
