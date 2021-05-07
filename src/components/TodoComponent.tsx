import { useMutation, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { initialState } from '../initialState';
import { GET_TODOS, ADD_TODO, DELETE_TODO, UPDATE_TODO } from '../gql_queries';
import { TodoForm } from './TodoForm';
import {TodoList} from './TodoList';


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


  const addTodo = async (text: string) => {
    const addTodoData = await addTodoMutator({variables: {text}})
    setTodoData([...todoData, addTodoData.data.addTodo])
  }

  const changeCompleted = async (index: number) => {
    console.log(todoData[index]);
    const updateTodoData = await updateTodoMutator({variables: {id: todoData[index].id, completed: !todoData[index].completed, text: todoData[index].text}})
    console.log(updateTodoData);
    setTodoData([...todoData.slice(0, index), updateTodoData.data.updateTodo, ...todoData.slice(index + 1)]);
  }

  const deleteTodo = async (index: number) => {
    const deleteTodoData = await deleteTodoMutator({variables: {id: todoData[index].id}});
    if (deleteTodoData.data.deleteTodo.id === todoData[index].id) {
      setTodoData([...todoData.slice(0, index), ...todoData.slice(index + 1)]);
    }
  }

  if (loading) return (<div>Loading...</div>)
  if (error) return (<div>Error! {error.message}</div>);

  return (
    <div>
      We are a component
      <TodoForm addTodo={addTodo} />
      {
        loading ? (<div>Loading...</div>) :
        (<TodoList todos={todoData} changeCompleted={changeCompleted} deleteTodo={deleteTodo} />)
      }
    </div>
  );
}
