 // src/entities/Reservation.js
 import { EntitySchema } from 'typeorm';
  
 export default new EntitySchema({
   name: 'Reservation',
   tableName: 'reservations',
   columns: {
     id: { type: Number, primary: true, generated: true },
     totalAmount: { type: 'float', nullable: false }
   },
   relations: {
     show: {
       type: 'many-to-one',
       target: 'Show',
       joinColumn: { name: 'showId' }
     },
     user: {
       type: 'many-to-one',
       target: 'User',
       joinColumn: { name: 'userId' }
     },
     bundles: {
       type: 'one-to-many',
       target: 'ReservationBundle',
       inverseSide: 'reservation'
     }
   }
 });