import React from 'react';
import { TodoDataType } from '../types';
import { DeleteTodoButton, StyledTodoItemHeader, TodoCheckbox, TodoTitleText, TodoDescriptionText, TodoDescriptionTextContainer, StyledTodoItemContainer } from './elements';

interface Props {
  todoItem: TodoDataType;
  index: number;
  isOpen: boolean;
  changeCompleted: Function;
  deleteTodo: Function;
  setOpenTodo: Function;
}

export const TodoListItem: React.FC<Props> = ({ todoItem, index, isOpen, changeCompleted, deleteTodo, setOpenTodo }): JSX.Element => {

  // const className = todoItem.completed ? "todo-item-strikethrough" : "todo-item-normal"
  const style = todoItem.completed ? {textDecoration: "line-through"} : {};


  return (
    <>
      <StyledTodoItemContainer index={index} isOpen={isOpen} >
        <StyledTodoItemHeader>
          <TodoTitleText 
            onClick={() => (!isOpen) ? setOpenTodo(index) : setOpenTodo(-1)}
            style={style}
          >
            {todoItem.title}
            {todoItem.completed ? '   (completed)' : null}
          </TodoTitleText>
          <TodoCheckbox 
            color="primary"
            checked={todoItem.completed} 
            onClick={() => changeCompleted(index)} 
          />
          <DeleteTodoButton variant="contained" onClick={() => {
            deleteTodo(index);
          }}>Remove</DeleteTodoButton>
          <br />
        </StyledTodoItemHeader>
        {isOpen ? 
        (<TodoDescriptionTextContainer index={index} isOpen={isOpen} >
          <TodoDescriptionText >{todoItem.description} </TodoDescriptionText>
        </TodoDescriptionTextContainer>) : null
        }
      </StyledTodoItemContainer>
    </>
  )
}