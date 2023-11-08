import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryControllerService } from 'src/app/openapi-client';

@Component({
  selector: 'pm-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss'],
})
export class CategoryDetailComponent {
  id: number;
  category: any;
  constructor(
    private myRoute: ActivatedRoute,
    private categoryService: CategoryControllerService
  ) {
    this.id = myRoute.snapshot.params['id'];
    categoryService.getCategoryById(this.id).subscribe((v) => {
      this.category = v;
    });
  }
}
