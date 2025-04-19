 
  // src/entities/Movie.js
  import { EntitySchema } from 'typeorm';
  
  export default new EntitySchema({
    name: 'Movie',
    tableName: 'movies',
    columns: {
      id: { type: Number, primary: true, generated: true },
      title: { type: String, nullable: false },
      description: { type: String, nullable: false },
      duration: { type: Number, nullable: false },
      imageUrl: { type: String, nullable: false },
      classification: {
        type: 'enum',
        enum: ['Seven', 'Thirteen', 'Sixteen', 'Eighteen'],
        nullable: false
      },
      createdAt: { type: 'timestamp', createDate: true }
    },
    relations: {
      category: {
        type: 'many-to-one',
        target: 'Category',
        joinColumn: { name: 'categoryId' }
      }
    }
  });