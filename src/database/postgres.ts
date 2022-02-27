import { join } from "path";
import { createConnection } from "typeorm";

const postgresConnection = async () => {
  return await createConnection({
    type: "postgres",
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: false,
    logging: process.env.NODE_ENV === "development" ? ["error", "info"] : false,
    entities: [join(__dirname, "../schemas/**/*.ts")],
    migrations: [join(__dirname, "../migrations/**/*.ts")],
    cli: {
      migrationsDir: "src/migrations",
    },
  });
};

export default postgresConnection;
