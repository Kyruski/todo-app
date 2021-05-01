const { gql } = require("apollo-server");

const typeDefs = gql`
  type Todo {
    id: ID!
    text: String!
    completed: Boolean!
  }

  input TodoInput {
    text: String!
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