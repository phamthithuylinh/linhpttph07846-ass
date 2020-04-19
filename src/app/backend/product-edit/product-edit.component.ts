import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ProductService } from '../../product.service';
import { Product } from '../../Product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
     private router: Router
  ) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(){
    this.route.params.subscribe(param => {
        this.productService.getProduct(param.productID).subscribe(data => this.product = data);
    })
  }
  updateProduct(){
        this.productService.updateProduct(this.product).subscribe(data => {
        this.router.navigateByUrl("/manager")
      });
  }
  }