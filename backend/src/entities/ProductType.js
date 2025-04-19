 
  // src/entities/ProductType.js
  import { EntitySchema } from 'typeorm';
  
  export default new EntitySchema({
    name: 'ProductType',
    tableName: 'product_types',
    columns: {
      id: { type: Number, primary: true, generated: true },
      name: { type: String, nullable: false },
      createdAt: { type: 'timestamp', createDate: true }
    },
    relations: {
      products: {
        type: 'one-to-many',
        target: 'Product',
        inverseSide: 'type'
      }
    }
  });