// src/app/components/categories/services/category.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categories: Category[] = [
    { id: 1, name: 'Frutas', description: 'Frutas frescas y de temporada' },
    { id: 2, name: 'Verduras', description: 'Verduras orgánicas y frescas' },
  ];
  private nextId = 3;

  private categoriesSubject = new BehaviorSubject<Category[]>([...this.categories]);

  getCategories(): Observable<Category[]> {
    return this.categoriesSubject.asObservable();
  }

  addCategory(category: Category): void {
    const newCategory = { ...category, id: this.nextId++ };
    this.categories.push(newCategory);
    this.categoriesSubject.next([...this.categories]);
  }

  updateCategory(updatedCategory: Category): void {
    this.categories = this.categories.map((c) =>
      c.id === updatedCategory.id ? { ...updatedCategory } : c
    );
    this.categoriesSubject.next([...this.categories]);
  }

  softDeleteCategory(id: number): void {
    this.categories = this.categories.filter((c) => c.id !== id);
    this.categoriesSubject.next([...this.categories]);
  }
}
