import { Controller, Post, Get, Body } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './product.entity';
import { Supplier } from '../suppliers/supplier.entity';

@Controller('products')
export class ProductsController {
  private products: Product[] = []; // Temporary in-memory storage

  @Post()
  createProduct(@Body() createProductDto: CreateProductDto): Product {
    const newProduct: Product = {
      ...createProductDto,
      id: (Math.random() * 1000).toString(), // Temporary ID generation
      created_at: new Date(),
      updated_at: new Date(),
      sku: 'TEMP-SKU', // Temporary SKU
      supplier: {
        id: 'TEMP-SUPPLIER-ID',
        name: 'Temporary Supplier',
        contact_person: 'John Doe',
        email: 'temp@supplier.com',
        supplier_code: 'TEMP-CODE',
      } as Supplier,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  @Get()
  getAllProducts(): Product[] {
    return this.products;
  }
}