// src/app/components/product-list/product-list.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../products/product.model';
import { ProductFilterPipe } from '../../pipes/product-filter.pipe';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    ProductFilterPipe // 👈 ProductFormComponent ha sido eliminado
  ]
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  searchText: string = '';

  removeProduct(index: number) {
    this.products.splice(index, 1);
  }
}