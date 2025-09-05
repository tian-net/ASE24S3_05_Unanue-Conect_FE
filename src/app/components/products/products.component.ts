import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductFormComponent } from '../product-form/product-form.component';
import { Product } from './product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductListComponent, ProductFormComponent],
  template: `
    <div class="product-page-container">
      <div class="form-column">
        <app-product-form (addProduct)="onAddProduct($event)"></app-product-form>
      </div>
      <div class="list-column">
        <app-product-list [products]="products"></app-product-list>
      </div>
    </div>
  `,
  styleUrls: ['./products.component.css']
})
export class ProductComponent {
  products: Product[] = [
    { name: 'Manzana', price: 3.5, image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg', description: 'Manzana fresca y jugosa, ideal para ensaladas o postres.', category: 'Fruta', quantity: 20 },
    { name: 'Banana', price: 2.0, image: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg', description: 'Banana madura, rica en potasio y energía.', category: 'Fruta', quantity: 15 },
    { name: 'Naranja', price: 4.0, image: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg', description: 'Naranja dulce y perfecta para jugos naturales.', category: 'Fruta', quantity: 25 }
  ];

  onAddProduct(product: Product) {
    this.products.push(product);
  }
}