import { Component } from '@angular/core';
import { ProductControllerService } from 'src/app/openapi-client';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products: any;
  constructor(private productService: ProductControllerService) {
    productService.getAllProducts().subscribe((v) => {
      this.products = v;
    });
  }
}
