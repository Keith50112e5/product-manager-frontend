import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductControllerService } from 'src/app/openapi-client';
import Swal from 'sweetalert2';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  id;
  product: any;
  constructor(
    private myRoute: ActivatedRoute,
    private productService: ProductControllerService,
    private router: Router
  ) {
    this.id = myRoute.snapshot.params['id'];
    productService.getProductById(this.id).subscribe((v) => {
      this.product = v;
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
        this.productService.deleteProductById(this.id).subscribe((v) => {
          this.router.navigateByUrl('/categories');
          alert(`Category id: ${this.id} has been deleted.`);
        });
      }
    });
  };
}
