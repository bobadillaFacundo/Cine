import "reflect-metadata";
import { AppDataSource } from "./data-source.js";

AppDataSource.initialize()
  .then(() => {
    console.log("✅ Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("❌ Error during Data Source initialization:", err);
  });