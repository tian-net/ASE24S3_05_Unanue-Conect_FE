import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // 👈 importa esto
import { ProductFormComponent } from '../product-form/product-form.component';
import { Product } from '../products/product.model';
import { ProductFilterPipe } from '../../pipes/product-filter.pipe';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,          // 👈 agrega aquí
    ProductFormComponent, 
    ProductFilterPipe
  ]
})
export class ProductListComponent {
  searchText: string = ''; // 👈 esto es lo que bindearás con ngModel

  products: Product[] = [
    {
      name: 'Manzana',
      price: 3.5,
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg',
      description: 'Manzana fresca y jugosa, ideal para ensaladas o postres.',
      category: 'Fruta',
      quantity: 20
    },
    {
      name: 'Banana',
      price: 2.0,
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg',
      description: 'Banana madura, rica en potasio y energía.',
      category: 'Fruta',
      quantity: 15
    },
    {
      name: 'Naranja',
      price: 4.0,
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg',
      description: 'Naranja dulce y perfecta para jugos naturales.',
      category: 'Fruta',
      quantity: 25
    }
  ];

  addProduct(product: Product) {
    this.products.push(product);
    alert(`✅ Producto "${product.name}" agregado correctamente`);
  }

  removeProduct(index: number) {
    this.products.splice(index, 1);
  }
}
