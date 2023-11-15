import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  CategoryControllerService,
  CategoryCreateDto,
} from 'src/app/openapi-client';

@Component({
  selector: 'pm-category-modify',
  templateUrl: './category-modify.component.html',
  styleUrls: ['./category-modify.component.scss'],
})
export class CategoryModifyComponent {
  categoryForm;
  id: any;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private myRoute: ActivatedRoute,
    private categoryService: CategoryControllerService,
    private router: Router
  ) {
    const { required } = Validators;
    this.categoryForm = formBuilder.group({
      active: [true, [required]],
      name: ['', [required]],
    });
    this.id = myRoute.snapshot.params['id'];
    if (this.id) {
      categoryService.getCategoryById(this.id).subscribe((v) => {
        this.categoryForm.patchValue(v as CategoryCreateDto);
      });
    }
  }
  submit = (form: FormGroup) => {
    this.submitted = true;

    this.id
      ? this.categoryService
          .updateCategoryById(this.id, form.value)
          .subscribe((v) => {
            this.router.navigateByUrl('/categories');
          })
      : this.categoryService.createCategory(form.value).subscribe((v) => {
          this.router.navigateByUrl('/categories');
        });
  };
}
