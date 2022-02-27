import "reflect-metadata";

import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import applyHelixMiddleware from "./middlewares/gql";
import initializeConnection from "./database/postgres";
import Container from "typedi";

dotenv.config();

const bootstrap = async () => {
  const app = express();

  const Connection = await initializeConnection();

  Container.set("CONNECTION", Connection);

  app.use(express.json());
  app.use(cors());
  app.use("/graphql", applyHelixMiddleware);

  app.listen(process.env.HTTP_PORT, () => {
    console.log(
      `⚡️[server]: Server is running at http://localhost:${process.env.HTTP_PORT}`
    );
  });
};

bootstrap();
