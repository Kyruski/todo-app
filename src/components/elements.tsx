import { Button, Checkbox, TextField, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const StyledInput = styled(TextField)`
  width: 450px;
`;

export const StyledTodoContainer = styled.div`
  width: 600px;
  margin: 0px auto;
`;

export const StyledInputForm = styled.form`
  display: flex;
  align-content: center;
  justify-content: center;
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

export const StyledTodoItem = styled.div`
  padding: 0px 10px;
  min-height: 50px;
  border: #d3d3d3 1px solid;
  border-radius: 15px;
  margin: 10px;
  display: flex;
  align-items: center;
`;

export const DeleteTodoButton = styled(Button)`
  height: 30px;
  flex-basis: 5rem;
`;

export const TodoItemText = styled(Typography)`
  flex-basis: 29rem;
  text-align: left;
`;

export const TodoCheckbox = styled(Checkbox)`
  height: 20px;
  width: 20px;
  flex-basis: 1.5rem;
`;