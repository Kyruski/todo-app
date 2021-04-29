import React, {useState} from 'react';
import { TodoForm } from './TodoForm';
import {TodoList} from './TodoList';

const fakeData = [{todoText: 'Item1', completed: true}, {todoText: 'Item2', completed: false}, {todoText: 'Item3', completed: false}, {todoText: 'Item4', completed: false}]

export const TodoComponent: React.FC = (): JSX.Element => {
  const [todoData, setTodoData] = useState(fakeData);

  const addTodo = (text: string): void => {
    setTodoData([...todoData, {todoText: text, completed: false}])
  }

  const changeCompleted = (index: number): void => {
    const newData = [...todoData];
    newData[index].completed = !newData[index].completed;
    setTodoData(newData);
  }

  return (
    <div>
      We are a component
      <TodoForm addTodo={addTodo} />
      <TodoList todoData={todoData} changeCompleted={changeCompleted} />
    </div>
  )
}
