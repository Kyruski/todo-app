import React, { useState } from 'react';
import { initialState } from '../initialState';
import { TodoForm } from './TodoForm';
import {TodoList} from './TodoList';


export const TodoComponent: React.FC = (): JSX.Element => {
  const [todoData, setTodoData] = useState(initialState);


  const addTodo = (text: string): void => {
    setTodoData([...todoData, {todoText: text, completed: false}])
  }

  const changeCompleted = (index: number): void => {
    const newData = [...todoData];
    newData[index].completed = !newData[index].completed;
    setTodoData(newData);
  }

  const deleteTodo = (index: number): void => {
    setTodoData([...todoData.slice(0, index), ...todoData.slice(index + 1)]);
  }

  return (
    <div>
      We are a component
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todoData} changeCompleted={changeCompleted} deleteTodo={deleteTodo} />
    </div>
  );
}
