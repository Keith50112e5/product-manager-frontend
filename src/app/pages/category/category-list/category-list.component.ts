import { Component } from '@angular/core';
import { CategoryControllerService } from 'src/app/openapi-client';

@Component({
  selector: 'pm-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent {
  columnNames = ['id', 'name', 'action'];
  categories: any;
  constructor(private categoryService: CategoryControllerService) {
    categoryService.getAllCategories().subscribe((v) => {
      this.categories = v;
    });
  }
  display = (json: object) => Object.values(json);
  keys = (arr: Array<object>) => [...new Set(Object.keys(arr[0]))];
}
