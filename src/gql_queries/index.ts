import { gql } from "@apollo/client";

export const GET_TODOS = gql`
  query GET_TODOS {
    getTodos {
      id
      text
      completed
    }
  }
`;

export const ADD_TODO = gql`
  mutation ADD_TODO($text: String!) {
    addTodo(todoInput: {text: $text, completed: false}) {
      id
      text
      completed
    }
  }
`;

export const DELETE_TODO = gql`
  mutation DELETE_TODO($id: ID!) {
    deleteTodo(todoId: $id) {
      id
      text
      completed
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation UPDATE_TODO($text: String!, $completed: Boolean!, $id: ID!) {
    updateTodo(todoId: $id, todoInput: {text: $text, completed: $completed}) {
      id
      text
      completed
    }
  }
`;