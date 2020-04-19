import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { Product } from '../../Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})

export class ProductManagerComponent implements OnInit {
 
  products: Product[];
  constructor(
     private router: Router,
    private productService: ProductService
  ) {
    console.log('constructor')
   }

  ngOnInit() {
    this.getProducts();
  }
  getProducts(){
   this.productService.getProducts().subscribe(data => {
     console.log(data);
     this.products = data;
    });
  }
  removeItem(id){
    this.productService.removeProduct(id).subscribe(response =>{
    this.products = this.products.filter(product => product.id != response.id);
    this.router.navigateByUrl("/product")
    }) 
  }
}