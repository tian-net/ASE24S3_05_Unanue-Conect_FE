// src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  {
    path: 'products',
    loadComponent: () =>
      import('./components/products/products.component').then(
        (m) => m.ProductComponent
      ),
  },
  {
    path: 'clients',
    loadComponent: () =>
      import('./components/clients/clients.component').then(
        (m) => m.ClientsComponent
      ),
  },
  {
  path: 'categories',
  loadComponent: () =>
    import('./components/categories/categories.component').then(
      (m) => m.CategoriesComponent
    ),
  },

];
