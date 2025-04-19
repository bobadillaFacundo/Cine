// src/entities/Show.js
  import { EntitySchema } from 'typeorm';
  
  export default new EntitySchema({
    name: 'Show',
    tableName: 'shows',
    columns: {
      id: { type: Number, primary: true, generated: true },
      date: { type: 'timestamp', nullable: false },
      adultPrice: { type: 'float', nullable: false },
      childPrice: { type: 'float', nullable: false }
    },
    relations: {
      movie: {
        type: 'many-to-one',
        target: 'Movie',
        joinColumn: { name: 'movieId' }
      },
      room: {
        type: 'many-to-one',
        target: 'Room',
        joinColumn: { name: 'roomId' }
      }
    }
  });