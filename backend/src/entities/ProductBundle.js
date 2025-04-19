  // src/entities/ProductBundle.js
  import { EntitySchema } from 'typeorm';
  
  export default new EntitySchema({
    name: 'ProductBundle',
    tableName: 'product_bundles',
    columns: {
      id: { type: Number, primary: true, generated: true },
      description: { type: String, nullable: false }
    },
    relations: {
      products: {
        type: 'one-to-many',
        target: 'BundleProduct',
        inverseSide: 'bundle'
      },
      reservations: {
        type: 'one-to-many',
        target: 'ReservationBundle',
        inverseSide: 'bundle'
      }
    }
  });