import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductModifyComponent } from './product-modify/product-modify.component';
import { ProductCategoryComponent } from './product-category/product-category.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductModifyComponent,
    ProductCategoryComponent,
  ],
  imports: [CommonModule, ProductRoutingModule],
})
export class ProductModule {}
