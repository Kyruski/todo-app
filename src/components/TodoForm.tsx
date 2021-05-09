import React, { useState } from 'react';
import { StyledTitleInput, StyledInputForm, SubmitTodoButton, StyledDescriptionInput } from './elements';

interface Props {
  addTodo: Function;
}

export const TodoForm: React.FC<Props> = ({ addTodo }): JSX.Element => {

  const [titleInputValue, setTitleInputValue] = useState("");
  const [descriptionInputValue, setDescriptionInputValue] = useState("")
  const [error, setError] = useState("");

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    // setTodoData()
    if (!titleInputValue) {
      setError('Please enter a Title');
      return;
    }
    if (!descriptionInputValue) {
      setError('Please enter a Description');
      return;
    }
    addTodo(titleInputValue, descriptionInputValue);
    setTitleInputValue("");
    setDescriptionInputValue("");
    setError("");
  }

  return (
    <div>
      <StyledInputForm>
        <StyledTitleInput 
          type="text" 
          name="todo-title-input" 
          value={titleInputValue} 
          placeholder="Enter a Title" 
          inputProps={{
            maxLength: 40,
          }}
          onChange={(e) => {setTitleInputValue(e.target.value)}}
          label="Add a new Todo"
        /><br />
        <StyledDescriptionInput 
          rows={4}
          cols={55}
          name="todo-description-input" 
          value={descriptionInputValue} 
          placeholder="Enter a new item To-Do" 
          onChange={(e) => {setDescriptionInputValue(e.target.value)}}
        /><br />
        <div style={{color: 'red'}}>{error}</div>
        <SubmitTodoButton variant="contained" onClick={(e) => handleSubmit(e)} >Submit</SubmitTodoButton>
      </StyledInputForm>
    </div>
  )
}