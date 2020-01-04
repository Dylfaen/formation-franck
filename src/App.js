import React from 'react';
import './App.css'
import TodoContainer from './containers/Todo';
import Survey from './containers/survey.container';
import Browser from './components/Browser/Browser';
import Todo from './components/Todo/Todo';

function App() {

  

  return (
    <div className="todo-app">
      <h1 className="todo-app__title">Redux thunk todo</h1>
      <TodoContainer/>
    </div>
  );
}

export default App;
