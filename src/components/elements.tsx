
import { Button, Checkbox, Link, TextareaAutosize, TextField, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const StyledInputForm = styled.form`

`;

export const StyledTitleInput = styled(TextField)`
  width: 450px;
  padding: 0px 0px 10px 0px;
`;

export const StyledDescriptionInput = styled(TextareaAutosize)`
  resize: none;
`;

export const StyledTodoContainer = styled.div`
  width: 600px;
  margin: 0px auto;
`;

export const SubmitTodoButton = styled(Button)`
  margin: 5px 0px;
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

export const StyledTodoItemHeader = styled.div`
  padding: 0px 10px;
  min-height: 50px;
  border-radius: 5px;
  margin: 2px 0px;
  display: flex;
  align-items: center;
`;
export const StyledTodoItemContainer = styled.div<{index: number, isOpen: boolean}>`
  background: ${({index}) => (index % 2 === 0 ? `#eae9e7` : `#cecdcb`)};
  border-radius: 10px;
`;

export const TodoDescriptionTextContainer = styled.div<{index: number, isOpen: boolean}>`
  border-radius: 0px 0px 10px 10px;
  border-left: 0px 2px 2px 2px ${({index}) => (index % 2 === 0 ? `#eae9e7` : `#cecdcb`)} solid;
  border-right: 2px ${({index}) => (index % 2 === 0 ? `#eae9e7` : `#cecdcb`)} solid;
  border-bottom: 2px ${({index}) => (index % 2 === 0 ? `#eae9e7` : `#cecdcb`)} solid;
  background: #faf9f7;
`;

export const TodoDescriptionText = styled(Typography)`
  padding: 10px 30px;
  text-align: left;
  word-wrap: break-word;
  width: 375px;
`;

export const DeleteTodoButton = styled(Button)`
  background: #f5f5f5;
  height: 30px;
  flex-basis: 5rem;
`;


export const TodoTitleText = styled(Link)`
  flex-basis: 29rem;
  text-align: left;
`;

export const TodoCheckbox = styled(Checkbox)`
  height: 20px;
  width: 20px;
  flex-basis: 1.5rem;
`;