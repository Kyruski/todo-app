const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Todo {
    id: ID!
    title: String!
    description: String!
    completed: Boolean!
  }

  input TodoInput {
    title: String!
    description: String!
    completed: Boolean!
  }

  type Query {
    getTodos: [Todo!]!
  }

  type Mutation {
    addTodo(todoInput: TodoInput): Todo!
    deleteTodo(todoId: ID!): Todo!
    updateTodo(todoId: ID!, todoInput: TodoInput): Todo!
  }
`;

module.exports = { typeDefs };