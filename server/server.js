const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require('./gql/todo-schema');
const { resolvers } = require('./gql/resolvers');

const port = 3001;

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({app, path: '/graphql'});

app.listen(port, () => {
  console.log(`Server ready at http://localhost:${port}/ \n GraphQL at: http://localhost:${port}/graphql/`);
});