import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryModifyComponent } from './category-modify/category-modify.component';
import { authGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  { path: '', component: CategoryListComponent },
  { path: ':id', component: CategoryDetailComponent },
  {
    path: 'mod/:id',
    component: CategoryModifyComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
