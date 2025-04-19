// src/entities/BundleProduct.js
import { EntitySchema } from 'typeorm';
  
export default new EntitySchema({
  name: 'BundleProduct',
  tableName: 'bundle_products',
  columns: {
    bundleId: { type: Number, primary: true },
    productId: { type: Number, primary: true },
    price: { type: 'double precision', nullable: false },
    quantity: { type: Number, nullable: false },
    date: { type: 'timestamp', createDate: true }
  },
  relations: {
    bundle: {
      type: 'many-to-one',
      target: 'ProductBundle',
      joinColumn: { name: 'bundleId' }
    },
    product: {
      type: 'many-to-one',
      target: 'Product',
      joinColumn: { name: 'productId' }
    }
  }
});
