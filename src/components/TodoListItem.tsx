import React from 'react';
import { TodoDataType } from './TodoList';

interface Props {
  todoItem: TodoDataType;
}

export const TodoListItem: React.FC<Props> = ({ todoItem }): JSX.Element => {

  return (
    <div>
      <strong>{todoItem.todoText}</strong>
      <input type="checkbox" checked={todoItem.completed} />
    </div>
  )
}