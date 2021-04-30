import React from 'react';
import { TodoDataType } from '../types';
import { TodoListItem } from './TodoListItem';

interface Props {
  todos: TodoDataType[];
  changeCompleted: Function;
  deleteTodo: Function;
}

export const TodoList: React.FC<Props> = ({ todos, changeCompleted, deleteTodo }): JSX.Element => {

  return (
    <>
      <h2>
        Todo List
      </h2>
      <div>
        {
          todos.map((item, index) => 
          (<TodoListItem 
            key={`todo-${index}`} 
            index={index} 
            todoItem={item}
            changeCompleted={changeCompleted}
            deleteTodo={deleteTodo} />)
          )
        }
      </div>
    </>
  )
}