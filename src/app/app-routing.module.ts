import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryModule } from './pages/category/category.module';
import { ProductModule } from './pages/product/product.module';
import { UserModule } from './pages/user/user.module';

const routes: Routes = [
  { path: 'users', loadChildren: () => UserModule },
  { path: 'products', loadChildren: () => ProductModule },
  { path: 'categories', loadChildren: () => CategoryModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
