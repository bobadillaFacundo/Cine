// src/data-source.ts
import "reflect-metadata";
import "dotenv/config";
import { DataSource } from "typeorm";


export const AppDataSource = new DataSource({
  type: "postgres",
  host:   process.env.DB_HOST     || "localhost",
  port:   Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER   || "postgres",
  password: process.env.DB_PASSWORD || "1234",
  database: process.env.DB_NAME   || "cinedb",
  synchronize: true,
  logging:     false,
  entities:    ["src/entities/*.js" ],
  migrations:  [ "src/migrations/*.cjs" ],
  subscribers: [],
});
