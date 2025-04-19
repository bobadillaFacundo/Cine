 // src/entities/Product.js
 import { EntitySchema } from 'typeorm';
  
 export default new EntitySchema({
   name: 'Product',
   tableName: 'products',
   columns: {
     id: { type: Number, primary: true, generated: true },
     name: { type: String, nullable: false },
     price: { type: 'double precision', nullable: false },
     description: { type: String, nullable: false },
     imageUrl: { type: String, nullable: false },
     createdAt: { type: 'timestamp', createDate: true }
   },
   relations: {
     type: {
       type: 'many-to-one',
       target: 'ProductType',
       joinColumn: { name: 'typeId' }
     },
     bundles: {
       type: 'many-to-many',
       target: 'ProductBundle',
       joinTable: {
         name: 'bundle_products',
         joinColumn: { name: 'productId', referencedColumnName: 'id' },
         inverseJoinColumn: { name: 'bundleId', referencedColumnName: 'id' }
       }
     }
   }
 });