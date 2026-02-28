import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Supplier } from './supplier.entity';

@Injectable()
export class SupplierService {
  constructor(
    @InjectRepository(Supplier)
    private readonly supplierRepository: Repository<Supplier>,
  ) {}

  async create(supplier: Partial<Supplier>): Promise<Supplier> {
    const newSupplier = this.supplierRepository.create(supplier);
    return this.supplierRepository.save(newSupplier);
  }

  async findAll(): Promise<Supplier[]> {
    return this.supplierRepository.find();
  }

  async findOne(id: string): Promise<Supplier> {
    const supplier = await this.supplierRepository.findOneBy({ id });

    if (!supplier) {
      throw new NotFoundException(`Supplier with ID ${id} not found`);
    }

    return supplier;
  }

  update(id: string, updateData: Partial<Supplier>): Promise<Supplier> {
    return this.supplierRepository.save({ ...updateData, id });
  }

  delete(id: string): Promise<void> {
    return this.supplierRepository.delete(id).then(() => undefined);
  }
}