import React from 'react';
import { TodoDataType } from '../types';

interface Props {
  todoItem: TodoDataType;
  index: number;
  changeCompleted: Function;
  deleteTodo: Function;
}

export const TodoListItem: React.FC<Props> = ({ todoItem, index, changeCompleted, deleteTodo }): JSX.Element => {

  // const className = todoItem.completed ? "todo-item-strikethrough" : "todo-item-normal"
  const style = todoItem.completed ? {textDecoration: "line-through"} : {};

  return (
    <div>
      <strong style={style}>{todoItem.todoText}</strong>
      <input 
        type="checkbox" 
        checked={todoItem.completed} 
        onClick={() => changeCompleted(index)} 
      />
      <button onClick={() => {
        deleteTodo(index);
      }}>Delete</button>
    </div>
  )
}