// src/app/components/categories/category-list/category-list.component.ts
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];

  @Output() editCategory = new EventEmitter<Category>();

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  onSelect(category: Category): void {
    this.editCategory.emit(category);
  }

  onDelete(id: number): void {
    if (confirm('¿Eliminar esta categoría?')) {
      this.categoryService.softDeleteCategory(id);
    }
  }
}
