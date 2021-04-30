import { createStore } from 'redux';
import { initialState } from './initialState';
import rootReducer from './reducers';



const store = (state: any = initialState) => {
  return createStore(rootReducer, state);
}

export default store;