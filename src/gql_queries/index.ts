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