import React, { useState } from 'react';
import { TodoDataType } from './TodoList';

interface Props {
  addTodo: Function;
}

export const TodoForm: React.FC<Props> = ({ addTodo }): JSX.Element => {

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    // setTodoData()
    if (!inputValue) return;
    addTodo(inputValue);
    setInputValue("");
  }

  return (
    <form>
    <input 
      type="text" 
      name="todo-input" 
      value={inputValue} 
      placeholder="Enter a new item To-Do" 
      onChange={(e) => {setInputValue(e.target.value)}}
    />
    <button onClick={(e) => handleSubmit(e)} >Submit</button>
    </form>
  )
}