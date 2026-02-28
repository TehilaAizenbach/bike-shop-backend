import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Supplier } from './supplier.entity';
import { SupplierService } from './suppliers.service';

@Controller('suppliers')
export class SuppliersController {
  constructor(private readonly suppliersService: SupplierService) {}

  @Post()
  create(@Body() supplierData: Partial<Supplier>): Promise<Supplier> {
    return this.suppliersService.create(supplierData);
  }

  @Get()
  findAll(): Promise<Supplier[]> {
    return this.suppliersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Supplier> {
    return this.suppliersService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateData: Partial<Supplier>): Promise<Supplier> {
    return this.suppliersService.update(id, updateData);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.suppliersService.delete(id);
  }
}