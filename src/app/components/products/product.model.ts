// Modelo de producto
export interface Product {
  name: string;
  price: number;
  description: string;
  category: 'Fruta' | 'Verdura' | 'Bebida';
  quantity: number;
  image: string;
}
