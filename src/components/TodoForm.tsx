import React, { useState } from 'react';
import { StyledInput, StyledInputForm, SubmitTodoButton } from './elements';

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
    <div>
      <StyledInputForm>
        <StyledInput 
          type="text" 
          name="todo-input" 
          value={inputValue} 
          placeholder="Enter a new item To-Do" 
          onChange={(e) => {setInputValue(e.target.value)}}
          label="Add a new Todo"
        />
        <SubmitTodoButton variant="contained" onClick={(e) => handleSubmit(e)} >Submit</SubmitTodoButton>
      </StyledInputForm>
    </div>
  )
}