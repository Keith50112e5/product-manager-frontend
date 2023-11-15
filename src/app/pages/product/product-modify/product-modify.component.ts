import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  CategoryControllerService,
  ProductControllerService,
  ProductCreateDto,
} from 'src/app/openapi-client';

@Component({
  selector: 'pm-product-modify',
  templateUrl: './product-modify.component.html',
  styleUrls: ['./product-modify.component.scss'],
})
export class ProductModifyComponent {
  productForm;
  id: any;
  submitted = false;
  categories: any;
  constructor(
    private formBuilder: FormBuilder,
    private myRoute: ActivatedRoute,
    private productService: ProductControllerService,
    private categoryService: CategoryControllerService,
    private router: Router
  ) {
    categoryService.getAllCategories().subscribe((v) => {
      this.categories = v;
    });
    const { required } = Validators;
    this.productForm = formBuilder.group({
      sku: ['', [required]],
      active: [true, [required]],
      name: ['', [required]],
      image: ['', [required]],
      description: ['', [required]],
      price: [0, [required]],
      stock: [0],
      categoryId: [0],
    });
    this.id = myRoute.snapshot.params['id'];
    if (this.id) {
      productService.getProductById(this.id).subscribe((v) => {
        this.productForm.patchValue(v as ProductCreateDto);
      });
    }
  }
  submit = (form: FormGroup) => {
    this.submitted = true;
    this.id
      ? this.productService
          .updateProductById(this.id, form.value)
          .subscribe((v) => {
            this.router.navigateByUrl('/products');
          })
      : this.productService.createProduct(form.value).subscribe((v) => {
          this.router.navigateByUrl('/products');
        });
  };
}
