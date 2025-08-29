import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../components/products/product.model'; 

@Pipe({
  name: 'productFilter',
  standalone: true
})
export class ProductFilterPipe implements PipeTransform {
  transform(products: Product[], searchText: string): Product[] {
    if (!products || !searchText) {
      return products;
    }

    const lowerSearch = searchText.toLowerCase();
    return products.filter(product =>
      product.name.toLowerCase().includes(lowerSearch) ||
      product.category.toLowerCase().includes(lowerSearch)
    );
  }
}
