import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryModifyComponent } from './category-modify/category-modify.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from "@angular/material/card";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryModifyComponent,
    CategoryDetailComponent,
  ],
  imports: [CommonModule, CategoryRoutingModule, MatButtonModule, MatCardModule, MatSlideToggleModule, MatInputModule, ReactiveFormsModule],
})
export class CategoryModule {}
