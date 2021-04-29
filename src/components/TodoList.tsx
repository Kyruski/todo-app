import React from 'react';
import { TodoListItem } from './TodoListItem';

export interface TodoDataType {
  todoText: string;
  completed: boolean;
}
interface Props {
  todoData: TodoDataType[];
  changeCompleted: Function;
}

export const TodoList: React.FC<Props> = ({ todoData, changeCompleted }): JSX.Element => {

  return (
    <>
      <h2>
        Todo List
      </h2>
      <div>
        {
          todoData.map((item, index) => 
          (<TodoListItem 
            key={`todo-${index}`} 
            index={index} 
            todoItem={item}
            changeCompleted={changeCompleted} />)
          )
        }
      </div>
    </>
  )
}