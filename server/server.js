const { ApolloServer } = require("apollo-server");
const { typeDefs } = require('./gql/todo-schema');
const { resolvers } = require('./gql/resolvers');


const server = new ApolloServer({ typeDefs, resolvers });

server.listen()
  .then(({ url }) => {
  console.log(`Server ready at ${url}`);
});