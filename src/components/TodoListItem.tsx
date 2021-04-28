import React from 'react';

interface Props {
  todoItem: string;
}

export const TodoListItem: React.FC<Props> = ({ todoItem }): JSX.Element => {

  return (
    <div>
      <strong>{todoItem}</strong>
    </div>
  )
}