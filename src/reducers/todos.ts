import { Payload, TodoDataType } from "../types";


const todosReducer = (state: TodoDataType[] = [], payload: Payload) => {
  switch (payload.type) {
    case 'ADD.TODO': {
      return [...state, {todoText: payload.text, completed: false}];
    }
    case 'DELETE.TODO': {
      return (payload.index || payload.index === 0) ? [...state.slice(0, payload.index), ...state.slice(payload.index + 1)] : state;
    }
    case 'CHANGE.COMPLETED': {
      if (payload.index || payload.index === 0) {
        const newData = [...state];
        newData[payload.index].completed = !newData[payload.index].completed;
        return newData;
      } else return state;
    }
    default: {
      return state;
    }
  }
}
export default todosReducer;
