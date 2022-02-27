import { buildSchema } from "type-graphql";
import { Container } from "typedi";
import { join } from "path";

const GqlSchema = async () => {
  return await buildSchema({
    resolvers: [join(__dirname, "../resolvers/**/index.ts")],
    container: Container,
  });
};

export default GqlSchema;
