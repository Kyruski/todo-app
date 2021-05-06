import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { initialState } from '../initialState';
import { GET_TODOS } from '../queries';
import { TodoForm } from './TodoForm';
import {TodoList} from './TodoList';


export const TodoComponent: React.FC = (): JSX.Element => {
  const {loading, error, data } = useQuery(GET_TODOS);
  const [todoData, setTodoData] = useState(initialState);

  useEffect(() => {
    if (!loading && data) {
      setTodoData(data.getTodos);
    }
  }, [loading, data])


  const addTodo = (text: string): void => {
    setTodoData([...todoData, {text, completed: false}])
  }

  const changeCompleted = (index: number): void => {
    const newData = [...todoData];
    newData[index].completed = !newData[index].completed;
    setTodoData(newData);
  }

  const deleteTodo = (index: number): void => {
    setTodoData([...todoData.slice(0, index), ...todoData.slice(index + 1)]);
  }

  if (loading) return (<div>Loading...</div>)
  if (error) return (<div>Error! {error.message}</div>);

  return (
    <div>
      We are a component
      <TodoForm addTodo={addTodo} />
      {todoData ? 
      (<TodoList todos={todoData} changeCompleted={changeCompleted} deleteTodo={deleteTodo} />) : null
      }
    </div>
  );
}
