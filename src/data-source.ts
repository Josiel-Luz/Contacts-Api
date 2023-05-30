import { DataSource, DataSourceOptions } from "typeorm";
import path from "node:path";
import "dotenv/config";
import { User } from "./entities/user.entity";
import { Contact } from "./entities/contact.entity";
import { CreateEntities1685472826268 } from "./migrations/1685472826268-createEntities";

const DataSoureConfig = (): DataSourceOptions => {
  const entitiesPath = path.join(__dirname, "entities/**.{js,ts");
  const migrationsPath = path.join(__dirname, "migrations/**.{js,ts");

  if (!process.env.DATABASE_URL) {
    throw new Error("Env var DATABASE_URL does not exists");
  }

  return {
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: false,
    logging: true,
    entities: [entitiesPath, User, Contact],
    migrations: [migrationsPath, CreateEntities1685472826268],
  };
};

const AppDataSource: DataSource = new DataSource(DataSoureConfig());

export default AppDataSource;
