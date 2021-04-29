import React from 'react';
import { TodoDataType } from './TodoList';

interface Props {
  todoItem: TodoDataType;
  index: number;
  changeCompleted: Function;
}

export const TodoListItem: React.FC<Props> = ({ todoItem, index, changeCompleted }): JSX.Element => {

  // const className = todoItem.completed ? "todo-item-strikethrough" : "todo-item-normal"
  const style = todoItem.completed ? {textDecoration: "line-through"} : {};

  return (
    <div>
      <strong style={style}>{todoItem.todoText}</strong>
      <input type="checkbox" checked={todoItem.completed} onClick={() => changeCompleted(index)} />
    </div>
  )
}