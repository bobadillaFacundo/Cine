 
  // src/entities/User.js
  import { EntitySchema } from 'typeorm';
  
  export default new EntitySchema({
    name: 'User',
    tableName: 'users',
    columns: {
      id: { type: Number, primary: true, generated: true },
      name: { type: String, nullable: false },
      email: { type: String, unique: true, nullable: false },
      password: { type: String, nullable: false },
      createdAt: { type: 'timestamp', createDate: true }
    },
    relations: {
      reservations: {
        type: 'one-to-many',
        target: 'Reservation',
        inverseSide: 'user'
      }
    }
  });
  