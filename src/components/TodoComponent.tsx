import React from 'react';
import {TodoList} from './TodoList';

const fakeData = ['Item1', 'Item2', 'Item3', 'Item4']

export const TodoComponent: React.FC = (): JSX.Element => {
  return (
    <div>
      We are a component
      <TodoList todoData={fakeData} />
    </div>
  )
}
