
  // src/entities/ReservationBundle.js
  import { EntitySchema } from 'typeorm';
  
  export default new EntitySchema({
    name: 'ReservationBundle',
    tableName: 'reservation_bundles',
    columns: {
      bundleId: { type: Number, primary: true },
      reservationId: { type: Number, primary: true },
      quantity: { type: Number, nullable: false },
      unitPrice: { type: 'decimal', nullable: false },
      totalPrice: { type: 'decimal', nullable: false }
    },
    relations: {
      bundle: {
        type: 'many-to-one',
        target: 'ProductBundle',
        joinColumn: { name: 'bundleId' }
      },
      reservation: {
        type: 'many-to-one',
        target: 'Reservation',
        joinColumn: { name: 'reservationId' }
      }
    }
  });
  