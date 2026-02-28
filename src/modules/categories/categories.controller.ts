import { Controller, Get, Post, Body } from '@nestjs/common';
import { Category } from './category.entity';

@Controller('categories')
export class CategoriesController {
  private categories: Category[] = []; // Temporary in-memory storage

  @Post()
  createCategory(@Body() category: Category): Category {
    this.categories.push(category);
    return category;
  }

  @Get()
  getAllCategories(): Category[] {
    return this.categories;
  }
}