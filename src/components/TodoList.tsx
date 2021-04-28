import React from 'react';
import { TodoListItem } from './TodoListItem';

interface Props {
  todoData: string[];
}

export const TodoList: React.FC<Props> = ({ todoData }): JSX.Element => {

  return (
    <>
      <h2>
        Todo List
      </h2>
      <div>
        {
          todoData.map((item, key) => 
          (<TodoListItem key={`todo${key}`} todoItem={item} />)
          )
        }
      </div>
    </>
  )
}