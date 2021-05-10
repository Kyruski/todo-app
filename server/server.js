const express = require("express");
const cors = require("cors");
const path = require('path');
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require('./gql/todo-schema');
const { resolvers } = require('./gql/resolvers');

const port = 3000;

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, '/../build/')));

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({app, path: '/graphql'});


app.listen(port, () => {
  console.log(`Server ready at http://localhost:${port}/ \n GraphQL at: http://localhost:${port}/graphql/`);
});