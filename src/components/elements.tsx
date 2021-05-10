
import { Button, Checkbox, Link, TextareaAutosize, TextField, Typography } from '@material-ui/core';
import styled from 'styled-components';

const colors = {
  itemLightGrey: `#eae9e7`,
  itemDarkGrey: `#cecdcb`,
  borderColor: `#cccccc`,
}

export const StyledTodoContainer = styled.div`
  width: 600px;
  margin: 0px auto;
  border: 3px ${colors.borderColor} solid;
  border-radius: 15px;
`;

export const StyledInputForm = styled.form`
  padding: 10px 0px;
  border-bottom: 2px ${colors.borderColor} solid;
`;

export const StyledTitleInput = styled(TextField)`
  width: 450px;
  padding: 0px 0px 10px 0px;
`;

export const StyledDescriptionInput = styled(TextareaAutosize)`
  resize: none;
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
  padding: 0px 0px 20px 0px;
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
  background: ${({index}) => (index % 2 === 0 ? colors.itemLightGrey : colors.itemDarkGrey)};
  border-radius: 10px;
`;

export const TodoDescriptionTextContainer = styled.div<{index: number, isOpen: boolean}>`
  border-radius: 0px 0px 10px 10px;
  border-left: 3px ${({index}) => (index % 2 === 0 ? colors.itemLightGrey : colors.itemDarkGrey)} solid;
  border-right: 3px ${({index}) => (index % 2 === 0 ? colors.itemLightGrey : colors.itemDarkGrey)} solid;
  border-bottom: 3px ${({index}) => (index % 2 === 0 ? colors.itemLightGrey : colors.itemDarkGrey)} solid;
  background: #faf9f7;
`;

export const TodoTitleText = styled(Link)`
  flex-basis: 29rem;
  text-align: left;
  padding: 0px 0px 0px 5px;
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

export const TodoCheckbox = styled(Checkbox)`
  height: 20px;
  width: 20px;
  flex-basis: 1.5rem;
`;