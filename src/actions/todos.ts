export const addTodo = (text: string) => {
  return {
    type: 'ADD.TODO',
    text
  }
}

export const deleteTodo = (index: number) => {
  return {
    type: 'DELETE.TODO',
    index
  }
}

export const changeCompleted = (index: number) => {
  return {
    type: 'CHANGE.COMPLETED',
    index
  }
}