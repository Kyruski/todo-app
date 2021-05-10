import React from 'react';
import { TodoDataType } from '../types';
import { StyledTodoList } from './elements';
import { TodoListItem } from './TodoListItem';

interface Props {
  todos: TodoDataType[];
  changeCompleted: Function;
  deleteTodo: Function;
  openTodo: number;
  setOpenTodo: Function
}

export const TodoList: React.FC<Props> = ({ todos, changeCompleted, openTodo, setOpenTodo, deleteTodo }): JSX.Element => {
  return (
      <StyledTodoList>
        {
          todos.map((item, index) => 
          (<TodoListItem 
            key={`todo-${index}`} 
            index={index} 
            todoItem={item}
            isOpen={index === openTodo}
            setOpenTodo={setOpenTodo}
            changeCompleted={changeCompleted}
            deleteTodo={deleteTodo} />)
          )
        }
      </StyledTodoList>
  )
}