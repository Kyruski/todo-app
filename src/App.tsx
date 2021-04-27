import React from 'react';
import './App.css';
import { TodoComponent } from './components/TodoComponent';

const App: Function = (): JSX.Element => {
  return (
    <div className="App">
      <h1>
        Hello World
      </h1>
      <TodoComponent />
    </div>
  );
}

export default App;
