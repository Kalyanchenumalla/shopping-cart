import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, signal } from '@angular/core';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  stock: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products = signal<Product[]>([]);
  private apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  fetchProducts() {
    this.http.get<Product[]>(this.apiUrl).subscribe(data => {
      this.products.set(data);
    })
  }

  getProducts(): Signal<Product[]> {
    return this.products;
  }
}
