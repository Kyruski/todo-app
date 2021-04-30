import React from 'react';
import { connect } from 'react-redux';
import { addTodo, changeCompleted, deleteTodo } from '../actions/todos';
import { initialState } from '../initialState';
import { TodoDataType } from '../types';
import { TodoForm } from '../components/TodoForm';
import {TodoList} from '../components/TodoList';

interface Props {
  todos: TodoDataType[];
  addTodo: Function;
  deleteTodo: Function;
  changeCompleted: Function;
}

const TodoComponent: React.FC<Props> = ({ todos, addTodo, deleteTodo, changeCompleted }): JSX.Element => {


  return (
    <div>
      We are a component
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} changeCompleted={changeCompleted} deleteTodo={deleteTodo} />
    </div>
  )
}

const mapStateToProps = (state: typeof initialState, props?: any) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  addTodo: (text: string) => dispatch(addTodo(text)),
  deleteTodo: (index: number) => dispatch(deleteTodo(index)),
  changeCompleted: (index: number) => dispatch(changeCompleted(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoComponent);
