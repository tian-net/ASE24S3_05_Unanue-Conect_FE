import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from '../product-form/product-form.component';
import { Product } from '../products/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: true,
  imports: [CommonModule, ProductFormComponent]
})
export class ProductListComponent {
  // Productos iniciales
  products: Product[] = [
    { name: 'Manzana', price: 3.5, image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg' },
    { name: 'Banana', price: 2.0, image: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg' },
    { name: 'Naranja', price: 4.0, image: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg' }
  ];

  // Agregar producto a la lista
  addProduct(product: Product) {
    this.products.push(product);
  }

  // Eliminar producto
  removeProduct(index: number) {
    this.products.splice(index, 1);
  }
}
