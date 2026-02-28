import { Injectable } from '@nestjs/common';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  private products: Product[] = []; // Temporary in-memory storage

  createProduct(product: Product): Product {
    this.products.push(product);
    return product;
  }

  getAllProducts(): Product[] {
    return this.products;
  }
}