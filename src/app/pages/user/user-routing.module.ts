import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserModifyComponent } from './user-modify/user-modify.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { authGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  { path: '', component: UserListComponent, canActivate: [authGuard] },
  { path: 'login', component: UserLoginComponent },
  { path: 'register', component: UserRegisterComponent },
  { path: 'mod/:id', component: UserModifyComponent, canActivate: [authGuard] },
  { path: ':id', component: UserDetailComponent, canActivate: [authGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
