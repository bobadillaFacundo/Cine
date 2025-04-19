
  // src/entities/Category.js
  import { EntitySchema } from 'typeorm';
  
  export default new EntitySchema({
    name: 'Category',
    tableName: 'categories',
    columns: {
      id: { type: Number, primary: true, generated: true },
      name: { type: String, nullable: false },
      createdAt: { type: 'timestamp', createDate: true }
    },
    relations: {
      movies: {
        type: 'one-to-many',
        target: 'Movie',
        inverseSide: 'category'
      }
    }
  });