import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../products/product.model';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  @Output() addProduct = new EventEmitter<Product>();

  newProduct: Product = {
    name: '',
    price: 0,
    description: '',
    category: 'Fruta',
    quantity: 1,
    image: ''
  };

  onSubmit() {
    if (this.newProduct.name && this.newProduct.price > 0 && this.newProduct.quantity > 0) {
      this.addProduct.emit({ ...this.newProduct });
      this.newProduct = { name: '', price: 0, description: '', category: 'Fruta', quantity: 1, image: '' };
    } else {
      alert('⚠️ Por favor, complete todos los campos correctamente');
    }
  }
}