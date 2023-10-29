import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductModifyComponent } from './product-modify/product-modify.component';
import { ProductCategoryComponent } from './product-category/product-category.component';

const routes: Routes = [
  { path: '', loadComponent: () => ProductListComponent },
  { path: ':id', loadComponent: () => ProductDetailComponent },
  { path: 'edit/:id', loadComponent: () => ProductModifyComponent },
  { path: 'category/:id', loadComponent: () => ProductCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}