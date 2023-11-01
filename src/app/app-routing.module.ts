import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'users', loadChildren: () => import('./pages/user/user.module').then(v => v.UserModule) },
  { path: 'products', loadChildren: () => import('./pages/product/product.module').then(v => v.ProductModule) },
  { path: 'categories', loadChildren: () => import("./pages/category/category.module").then(v => v.CategoryModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
