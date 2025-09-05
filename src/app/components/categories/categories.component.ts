// src/app/components/categories/categories.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from './models/category.model';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryListComponent } from './category-list/category-list.component';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, CategoryFormComponent, CategoryListComponent],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  selectedCategory: Category | null = null;

  onEditCategory(category: Category): void {
    this.selectedCategory = category;
  }
}
