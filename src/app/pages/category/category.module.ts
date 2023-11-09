import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryModifyComponent } from './category-modify/category-modify.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryModifyComponent,
    CategoryDetailComponent,
  ],
  imports: [CommonModule, CategoryRoutingModule, MatButtonModule],
})
export class CategoryModule {}
