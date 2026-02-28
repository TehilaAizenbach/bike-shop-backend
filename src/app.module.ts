import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './modules/products/products.module';
import { SuppliersModule } from './modules/suppliers/suppliers.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { OrdersModule } from './modules/orders/orders.module';
import { InfluencersModule } from './modules/influencers/influencers.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: String(process.env.DB_HOST || 'localhost'),
      port: parseInt(String(process.env.DB_PORT || '5432'), 10),
      username: String(process.env.DB_USERNAME || 'postgres'),
      password: String(process.env.DB_PASSWORD || 'password'),
      database: String(process.env.DB_NAME || 'bike_shop'),
      autoLoadEntities: true,
      synchronize: true, // Set to false in production
    }),
    ProductsModule,
    SuppliersModule,
    CategoriesModule,
    OrdersModule,
    InfluencersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
