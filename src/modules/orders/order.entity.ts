import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne } from 'typeorm';
import { Product } from '../products/product.entity';
import { Influencer } from '../influencers/influencer.entity';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  customer_name: string;

  @Column({ type: 'text' })
  address: string;

  @Column({ type: 'decimal' })
  total_price: number;

  @Column({ default: 'pending' })
  status: string;

  @Column({ type: 'timestamp' })
  order_date: Date;

  @ManyToOne(() => Influencer, (influencer) => influencer.orders, { nullable: true })
  influencer?: Influencer;

  @ManyToMany(() => Product)
  @JoinTable()
  products: Product[];
}