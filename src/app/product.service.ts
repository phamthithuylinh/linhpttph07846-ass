import { Injectable } from '@angular/core';
import { Product } from './Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class ProductService {
  api = 'https://5e7c42c3a917d700166830c2.mockapi.io/api/products';
  constructor(
    private http: HttpClient
  ) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.api);
  }
   getProduct(id): Observable<Product>{
     console.log(id)
    return this.http.get<Product>(`${this.api}/${id}`);
    // return this.products.find(product => product.id == id);
  }
  removeProduct(id): Observable<Product>{
    return this.http.delete<Product>(`${this.api}/${id}`);
    // return this.products.filter(product => product.id !== id);
  }
addProduct(product){
    return this.http.post<Product>(`${this.api}`, product);
    // const newProduct = { id: 5, ...product};
    // this.products.push(newProduct);
    // console.log(this.products)
  }
  updateProduct(product){
     return this.http.put<Product>(`${this.api}/${product.id}`, product);
  }
}