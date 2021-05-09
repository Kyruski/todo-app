import React from 'react';
import { TodoDataType } from '../types';
import { DeleteTodoButton, StyledTodoItem, TodoCheckbox, TodoTitleText, TodoDescriptionText } from './elements';

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
    <StyledTodoItem index={index}>
      <TodoTitleText style={style}>{todoItem.title}</TodoTitleText>
      <TodoDescriptionText >{todoItem.description} </TodoDescriptionText>
      <TodoCheckbox 
        color="primary"
        checked={todoItem.completed} 
        onClick={() => changeCompleted(index)} 
      />
      <DeleteTodoButton variant="contained" onClick={() => {
        deleteTodo(index);
      }}>Remove</DeleteTodoButton>
    </StyledTodoItem>
  )
}