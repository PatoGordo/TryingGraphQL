import express, { Application } from "express";
import cors from "cors";
import { routes } from "@/routes";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import path from "path";
import fs from "fs";
import { graphQLRoutes } from "./routes/graphql.routes";

class App {
  public app: Application;

  constructor() {
    this.app = express();

    this.middlewares();
    this.routes();
    this.graphQL();
  }

  private middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  private routes() {
    this.app.use(routes);
  }

  private graphQL() {
    function getSchema() {
      try {
        const data = fs.readFileSync(
          path.resolve(__dirname, "graphql", "schema.graphql")
        );
        return `${data}`;
      } catch (err) {
        throw err;
      }
    }

    const schema = buildSchema(getSchema());

    this.app.use(
      "/graphql",
      graphqlHTTP({
        schema,
        rootValue: graphQLRoutes(),
        graphiql: true
      })
    );
  }
}

export default new App().app;
