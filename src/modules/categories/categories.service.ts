import { Injectable } from '@nestjs/common';
import { Category } from './category.entity';

@Injectable()
export class CategoriesService {
  private categories: Category[] = []; // Temporary in-memory storage

  createCategory(category: Category): Category {
    this.categories.push(category);
    return category;
  }

  getAllCategories(): Category[] {
    return this.categories;
  }
}