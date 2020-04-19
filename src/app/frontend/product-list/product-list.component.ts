import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../product.service";

import { Product } from "../../Product";
@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  selected: Product;
  products: Product[];

  constructor(private productService: ProductService) {
    console.log("constructor");
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(data => {
      console.log(data);
      this.products = data;
    });
  }
  removeItem(id) {
    this.productService.removeProduct(id).subscribe(response => {
      this.products = this.products.filter(
        product => product.id != response.id
      );
    });
    // this.products = this.products.filter(product => product.id != id);
  }
}
