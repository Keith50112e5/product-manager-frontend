import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryControllerService } from 'src/app/openapi-client';
import Swal from 'sweetalert2';

@Component({
  selector: 'pm-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss'],
})
export class CategoryDetailComponent {
  id;
  category: any;
  constructor(
    private myRoute: ActivatedRoute,
    private categoryService: CategoryControllerService,
    private router: Router
  ) {
    this.id = myRoute.snapshot.params['id'];
    categoryService.getCategoryById(this.id).subscribe((v) => {
      this.category = v;
    });
  }
  delete = () => {
    Swal.fire({
      title: 'Delete',
      text: `Delete category id: ${this.id} ?`,
      // icon: 'question',
      cancelButtonText: 'Abbrechen',
      showCancelButton: true,
    }).then((res) => {
      if (res.isConfirmed) {
        this.categoryService.deleteCategoryById(this.id).subscribe((v) => {
          this.router.navigateByUrl('/categories');
          alert(`Category id: ${this.id} has been deleted.`);
        });
      }
    });
  };
}
