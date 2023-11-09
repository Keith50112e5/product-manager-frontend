import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryControllerService } from 'src/app/openapi-client';

@Component({
  selector: 'pm-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss'],
})
export class CategoryDetailComponent {
  category: any;
  constructor(
    private myRoute: ActivatedRoute,
    private categoryService: CategoryControllerService
  ) {
    const id = myRoute.snapshot.params['id'];
    categoryService.getCategoryById(id).subscribe((v) => {
      this.category = v;
    });
  }
}
