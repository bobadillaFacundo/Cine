  // src/entities/Room.js
  import { EntitySchema } from 'typeorm';
  
  export default new EntitySchema({
    name: 'Room',
    tableName: 'rooms',
    columns: {
      id: { type: Number, primary: true, generated: true },
      name: { type: String, nullable: false },
      capacity: { type: Number, nullable: false },
      createdAt: { type: 'timestamp', createDate: true }
    }
  });