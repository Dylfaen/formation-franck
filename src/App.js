import React from 'react';
import './App.css'
import TodoContainer from './containers/Todo';
import Survey from './containers/survey.container';

function App() {

  

  return (
    <div className="todo-app">
      <h1 className="todo-app__title">Redux thunk todo</h1>
      <Survey/>
    </div>
  );
}

export default App;
