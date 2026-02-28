import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { SupplierService } from './suppliers.service';
import { Supplier } from './supplier.entity';

@Controller('suppliers')
export class SupplierController {
  constructor(private readonly supplierService: SupplierService) {}

  @Post()
  create(@Body() supplierData: Partial<Supplier>): Promise<Supplier> {
    return this.supplierService.create(supplierData);
  }

  @Get()
  findAll(): Promise<Supplier[]> {
    return this.supplierService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Supplier> {
    return this.supplierService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateData: Partial<Supplier>): Promise<Supplier> {
    return this.supplierService.update(id, updateData);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.supplierService.delete(id);
  }
}