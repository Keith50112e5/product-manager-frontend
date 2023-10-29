import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryModifyComponent } from './category-modify/category-modify.component';

const routes: Routes = [
  { path: '', loadComponent: () => CategoryListComponent },
  { path: ':id', loadComponent: () => CategoryDetailComponent },
  { path: 'mod/:id', loadComponent: () => CategoryModifyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
