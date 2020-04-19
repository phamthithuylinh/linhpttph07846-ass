import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../product.service';
import { Product } from '../../Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(){
     this.route.params.subscribe(param => {
       
        this.productService.getProduct(param.productID).subscribe(data => this.product = data);
    })
  }

}