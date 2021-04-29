import React from 'react';
import { TodoListItem } from './TodoListItem';

export interface TodoDataType {
  todoText: string;
  completed: boolean;
}
interface Props {
  todoData: TodoDataType[];
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