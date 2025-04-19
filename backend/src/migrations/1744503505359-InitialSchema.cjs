module.exports = class InitialSchema1744503505359 {
    name = 'InitialSchema1744503505359'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "shows" ("id" SERIAL NOT NULL, "date" TIMESTAMP NOT NULL, "adultPrice" double precision NOT NULL, "childPrice" double precision NOT NULL, "movieId" integer, "roomId" integer, CONSTRAINT "PK_db2b12161dbc5081c4f50025669" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "rooms" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "capacity" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0368a2d7c215f2d0458a54933f2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reservation_bundles" ("bundleId" integer NOT NULL, "reservationId" integer NOT NULL, "quantity" integer NOT NULL, "unitPrice" numeric NOT NULL, "totalPrice" numeric NOT NULL, CONSTRAINT "PK_b08a35464bda56ac7f219972505" PRIMARY KEY ("bundleId", "reservationId"))`);
        await queryRunner.query(`CREATE TABLE "reservations" ("id" SERIAL NOT NULL, "totalAmount" double precision NOT NULL, "showId" integer, "userId" integer, CONSTRAINT "PK_da95cef71b617ac35dc5bcda243" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_types" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_6ad7b08e6491a02ebc9ed82019d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_bundles" ("id" SERIAL NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_90176621a4e93cc30e1f5b2077b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "products" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "price" double precision NOT NULL, "description" character varying NOT NULL, "imageUrl" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "typeId" integer, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."movies_classification_enum" AS ENUM('Seven', 'Thirteen', 'Sixteen', 'Eighteen')`);
        await queryRunner.query(`CREATE TABLE "movies" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "duration" integer NOT NULL, "imageUrl" character varying NOT NULL, "classification" "public"."movies_classification_enum" NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "categoryId" integer, CONSTRAINT "PK_c5b2c134e871bfd1c2fe7cc3705" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categories" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "bundle_products" ("bundleId" integer NOT NULL, "productId" integer NOT NULL, "price" double precision NOT NULL, "quantity" integer NOT NULL, "date" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_711a0a01c42bed3055d4f118789" PRIMARY KEY ("bundleId", "productId"))`);
        await queryRunner.query(`ALTER TABLE "bundle_products" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "bundle_products" DROP COLUMN "quantity"`);
        await queryRunner.query(`ALTER TABLE "bundle_products" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "bundle_products" ADD "price" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "bundle_products" ADD "quantity" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "bundle_products" ADD "date" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`CREATE INDEX "IDX_a7a62aa2c348f05ea3b37f4656" ON "bundle_products" ("productId") `);
        await queryRunner.query(`CREATE INDEX "IDX_32bb35da1482ccb121cc9b7c1f" ON "bundle_products" ("bundleId") `);
        await queryRunner.query(`ALTER TABLE "shows" ADD CONSTRAINT "FK_c3b308f49df8783e504f63dc3f0" FOREIGN KEY ("movieId") REFERENCES "movies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "shows" ADD CONSTRAINT "FK_ca567ce5051e0ac05c3021e7510" FOREIGN KEY ("roomId") REFERENCES "rooms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reservation_bundles" ADD CONSTRAINT "FK_278c1dbf945d2a67757f76b44e7" FOREIGN KEY ("bundleId") REFERENCES "product_bundles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reservation_bundles" ADD CONSTRAINT "FK_157a2260519e765b33b13031a3f" FOREIGN KEY ("reservationId") REFERENCES "reservations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reservations" ADD CONSTRAINT "FK_ce4f1075b9e52f36790df6cbe1f" FOREIGN KEY ("showId") REFERENCES "shows"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reservations" ADD CONSTRAINT "FK_aa0e1cc2c4f54da32bf8282154c" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_6129aa5c0f65c073ea2f7452195" FOREIGN KEY ("typeId") REFERENCES "product_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "movies" ADD CONSTRAINT "FK_756446d4a415245bf4e95f9a37c" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bundle_products" ADD CONSTRAINT "FK_32bb35da1482ccb121cc9b7c1fc" FOREIGN KEY ("bundleId") REFERENCES "product_bundles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bundle_products" ADD CONSTRAINT "FK_a7a62aa2c348f05ea3b37f46564" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "bundle_products" DROP CONSTRAINT "FK_a7a62aa2c348f05ea3b37f46564"`);
        await queryRunner.query(`ALTER TABLE "bundle_products" DROP CONSTRAINT "FK_32bb35da1482ccb121cc9b7c1fc"`);
        await queryRunner.query(`ALTER TABLE "movies" DROP CONSTRAINT "FK_756446d4a415245bf4e95f9a37c"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_6129aa5c0f65c073ea2f7452195"`);
        await queryRunner.query(`ALTER TABLE "reservations" DROP CONSTRAINT "FK_aa0e1cc2c4f54da32bf8282154c"`);
        await queryRunner.query(`ALTER TABLE "reservations" DROP CONSTRAINT "FK_ce4f1075b9e52f36790df6cbe1f"`);
        await queryRunner.query(`ALTER TABLE "reservation_bundles" DROP CONSTRAINT "FK_157a2260519e765b33b13031a3f"`);
        await queryRunner.query(`ALTER TABLE "reservation_bundles" DROP CONSTRAINT "FK_278c1dbf945d2a67757f76b44e7"`);
        await queryRunner.query(`ALTER TABLE "shows" DROP CONSTRAINT "FK_ca567ce5051e0ac05c3021e7510"`);
        await queryRunner.query(`ALTER TABLE "shows" DROP CONSTRAINT "FK_c3b308f49df8783e504f63dc3f0"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_32bb35da1482ccb121cc9b7c1f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a7a62aa2c348f05ea3b37f4656"`);
        await queryRunner.query(`ALTER TABLE "bundle_products" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "bundle_products" DROP COLUMN "quantity"`);
        await queryRunner.query(`ALTER TABLE "bundle_products" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "bundle_products" ADD "date" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "bundle_products" ADD "quantity" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "bundle_products" ADD "price" double precision NOT NULL`);
        await queryRunner.query(`DROP TABLE "bundle_products"`);
        await queryRunner.query(`DROP TABLE "categories"`);
        await queryRunner.query(`DROP TABLE "movies"`);
        await queryRunner.query(`DROP TYPE "public"."movies_classification_enum"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TABLE "product_bundles"`);
        await queryRunner.query(`DROP TABLE "product_types"`);
        await queryRunner.query(`DROP TABLE "reservations"`);
        await queryRunner.query(`DROP TABLE "reservation_bundles"`);
        await queryRunner.query(`DROP TABLE "rooms"`);
        await queryRunner.query(`DROP TABLE "shows"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }
}
