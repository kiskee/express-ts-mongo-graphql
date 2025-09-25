import express from "express";
import routes from "./routes.js";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import { readFile } from "node:fs/promises";
import { resolvers } from "./resolvers.js";
import { connectDB } from "./database/mongo.js";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT;

connectDB();

app.use(express.json());
app.use("/", routes);

const typeDefs = await readFile("./shema.graphql", "utf8");

const ApolloServerInstance = new ApolloServer({ typeDefs, resolvers });
await ApolloServerInstance.start();
app.use("/graphql", expressMiddleware(ApolloServerInstance));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`Graphql corriendo en http://localhost:${PORT}/graphql`);
});
