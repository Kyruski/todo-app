import React from 'react';
import { TodoDataType } from '../types';
import { TodoListHeader } from './elements';
import { TodoListItem } from './TodoListItem';

interface Props {
  todos: TodoDataType[];
  changeCompleted: Function;
  deleteTodo: Function;
}

export const TodoList: React.FC<Props> = ({ todos, changeCompleted, deleteTodo }): JSX.Element => {

  return (
    <>
      <TodoListHeader>
        Todo List
      </TodoListHeader>
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