// src/app/components/categories/category-form/category-form.component.ts
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css'],
})
export class CategoryFormComponent implements OnChanges {
  @Input() categoryToEdit: Category | null = null;

  category: Category = { id: 0, name: '', description: '' };

  constructor(private categoryService: CategoryService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['categoryToEdit'] && this.categoryToEdit) {
      this.category = { ...this.categoryToEdit };
    }
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      if (this.category.id === 0) {
        this.categoryService.addCategory(this.category);
      } else {
        this.categoryService.updateCategory(this.category);
      }
      this.resetForm(form);
      this.categoryToEdit = null;
    }
  }

  resetForm(form?: NgForm): void {
    form?.resetForm();
    this.category = { id: 0, name: '', description: '' };
  }
}
