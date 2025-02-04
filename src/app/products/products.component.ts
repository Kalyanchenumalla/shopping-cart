import { Component, OnInit, Signal } from '@angular/core';
import { ProductsService } from '../products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  
  products!: Signal<any[]>
  constructor(private productsService: ProductsService) {}


  ngOnInit(){
    this.productsService.fetchProducts();
    this.products = this.productsService.getProducts();
  }
}
