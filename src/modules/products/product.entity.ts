import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Supplier } from '../suppliers/supplier.entity';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'decimal' })
  price: number;

  @Column({ type: 'int' })
  stock_quantity: number;

  @Column({ type: 'simple-array', nullable: true })
  colors?: string[];

  @Column({ type: 'jsonb', nullable: true })
  size_table?: Record<string, string>;

  @Column({type: 'simple-array', nullable: true})
  images?: string[];

  @Column({ type: 'varchar', length: 255, nullable: true })
  category?: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  sku: string;

  @ManyToOne(() => Supplier, (supplier) => supplier.id)
  supplier: Supplier;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}