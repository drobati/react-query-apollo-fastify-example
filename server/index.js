const { ApolloServer, gql } = require("apollo-server-fastify");
const { typeDefs, resolvers } = require("./module");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = require("fastify")();

(async function () {
  app.register(
    server.createHandler({
      cors: {
        origin: "*",
      },
    })
  );
  await app.listen(4000);
})();
