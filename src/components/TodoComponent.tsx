import { useMutation, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { initialState } from '../initialState';
import { GET_TODOS, ADD_TODO, DELETE_TODO, UPDATE_TODO } from '../gql_queries';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { Box } from '@material-ui/core';
import { StyledTodoContainer } from './elements';


export const TodoComponent: React.FC = (): JSX.Element => {
  const {loading, error, data } = useQuery(GET_TODOS);
  const [todoData, setTodoData] = useState(initialState);
  const [addTodoMutator] = useMutation(ADD_TODO);
  const [deleteTodoMutator] = useMutation(DELETE_TODO);
  const [updateTodoMutator] = useMutation(UPDATE_TODO);
  
  useEffect(() => {
    if (!loading && data) {
      setTodoData(data.getTodos);
    }
  }, [loading, data])


  const addTodo = async (title: string, description: string) => {
    const addTodoData = await addTodoMutator({variables: {title, description}})
    setTodoData([...todoData, addTodoData.data.addTodo])
  }

  const changeCompleted = async (index: number) => {
    const updateTodoData = await updateTodoMutator({variables: {id: todoData[index].id, completed: !todoData[index].completed, title: todoData[index].title, description: todoData[index].description}})
    if (updateTodoData.data.updateTodo.id === todoData[index].id) {
      setTodoData([...todoData.slice(0, index), updateTodoData.data.updateTodo, ...todoData.slice(index + 1)]);
    }
  }

  const deleteTodo = async (index: number) => {
    const deleteTodoData = await deleteTodoMutator({variables: {id: todoData[index].id}});
    if (deleteTodoData.data.deleteTodo.id === todoData[index].id) {
      setTodoData([...todoData.slice(0, index), ...todoData.slice(index + 1)]);
    }
  }
  
  if (error) return (<div>Error! {error.message}</div>);

  return (
    <StyledTodoContainer>
      <TodoForm addTodo={addTodo} />
      {
        loading ? (<div>Loading...</div>) :
        todoData.length ?
        (<TodoList todos={todoData} changeCompleted={changeCompleted} deleteTodo={deleteTodo} />) :
        (<div> You have no Todos </div>)
      }
    </StyledTodoContainer>
  );
}
