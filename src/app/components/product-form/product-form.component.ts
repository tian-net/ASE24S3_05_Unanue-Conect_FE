import { Component, EventEmitter, Output } from '@angular/core';
// Necesario para usar ngModel
import { FormsModule } from '@angular/forms';
import { Product } from '../products/product.model';

@Component({
  selector: 'app-product-form', // Selector: <app-product-form>
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  standalone: true,
  imports: [FormsModule] // Importamos FormsModule para ngModel
})
export class ProductFormComponent {
  // Output para enviar productos al componente padre
  @Output() addProduct = new EventEmitter<Product>();

  // Variables enlazadas a los inputs del formulario
  name: string = ''; // Nombre del producto
  price: number | null = null; // Precio del producto
  image: string = ''; // URL de la imagen

  // Función que se ejecuta al enviar el formulario
  onSubmit() {
    if (!this.name || !this.price || !this.image) {
      alert('Por favor, completa todos los campos'); // Validación básica
      return;
    }

    // Creamos un nuevo producto
    const newProduct: Product = {
      name: this.name,
      price: this.price,
      image: this.image
    };

    // Emitimos el producto al componente padre
    this.addProduct.emit(newProduct);

    // Limpiamos los inputs
    this.name = '';
    this.price = null;
    this.image = '';
  }
}
