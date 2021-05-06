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

// const ADD_TODO = gql`
//   mutation ADD_TODO {
//     addTodo(text)
//   }
// `