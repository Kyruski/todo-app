import { createStore } from 'redux';
import { initialState } from './initialState';
import rootReducer from './reducers';



const configureStore = (state: any = initialState) => {
  return createStore(rootReducer, state);
}

export default configureStore;