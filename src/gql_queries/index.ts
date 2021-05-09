import { gql } from "@apollo/client";

export const GET_TODOS = gql`
  query GET_TODOS {
    getTodos {
      id
      title
      description
      completed
    }
  }
`;

export const ADD_TODO = gql`
  mutation ADD_TODO($title: String!, $description: String!) {
    addTodo(todoInput: {title: $title, description: $description, completed: false}) {
      id
      title
      description
      completed
    }
  }
`;

export const DELETE_TODO = gql`
  mutation DELETE_TODO($id: ID!) {
    deleteTodo(todoId: $id) {
      id
      title
      description
      completed
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation UPDATE_TODO($title: String!, $description: String!, $completed: Boolean!, $id: ID!) {
    updateTodo(todoId: $id, todoInput: {title: $title, description: $description, completed: $completed}) {
      id
      title
      description
      completed
    }
  }
`;