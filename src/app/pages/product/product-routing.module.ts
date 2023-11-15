import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductModifyComponent } from './product-modify/product-modify.component';
import { authGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  {
    path: 'add',
    component: ProductModifyComponent,
    canActivate: [authGuard],
  },
  {
    path: 'mod',
    component: ProductModifyComponent,
    canActivate: [authGuard],
  },
  {
    path: 'mod/:id',
    component: ProductModifyComponent,
    canActivate: [authGuard],
  },
  { path: '', component: ProductListComponent },
  { path: ':id', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
