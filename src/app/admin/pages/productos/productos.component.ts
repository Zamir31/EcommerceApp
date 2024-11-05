import { Component, computed, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductResponse } from '../../interfaces/products/product-response.interface';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  private productService = inject(ProductsService);

  // public loaderProd = computed(() => this.productService.loadProducts());

  public products = computed(() => this.productService.products());

  constructor() {

  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe();
  }
}
