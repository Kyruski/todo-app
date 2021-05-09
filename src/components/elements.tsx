import { Button, Checkbox, TextareaAutosize, TextField, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const StyledTitleInput = styled(TextField)`
  width: 450px;
`;

export const StyledTodoContainer = styled.div`
  width: 600px;
  margin: 0px auto;
`;

export const StyledInputForm = styled.form`
`;

export const StyledDescriptionInput = styled(TextareaAutosize)`
  resize: none
`;

export const SubmitTodoButton = styled(Button)`
  margin: 5px 0px 5px 10px;
`;

export const TodoListHeader = styled(Typography)`
  margin: 10px;
  font-size: 28px;
  font-weight: 500;
`;

export const StyledTodoList = styled.div`
  width: 550px;
  margin: 0px auto;
`;

export const StyledTodoItem = styled.div<{index: number}>`
  background: ${({index}) => (index % 2 === 0 ? `#f4f0ec` : `#e5e4e2`)};
  padding: 0px 10px;
  min-height: 50px;
  border-radius: 5px;
  margin: 2px 0px;
  display: flex;
  align-items: center;
`;

export const DeleteTodoButton = styled(Button)`
  background: #f5f5f5;
  height: 30px;
  flex-basis: 5rem;
`;

export const TodoTitleText = styled(Typography)`
  flex-basis: 29rem;
  text-align: left;
`;

export const TodoDescriptionText = styled(Typography)`
  flex-basis: 29rem;
  text-align: left;
`;

export const TodoCheckbox = styled(Checkbox)`
  height: 20px;
  width: 20px;
  flex-basis: 1.5rem;
`;