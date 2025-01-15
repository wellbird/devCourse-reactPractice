import React from 'react';
import './App.css';
import TodoList from './todoList.tsx';
import Clock from './timer.tsx';

function App() {
  return (
    <div className="container">
      <TodoList />
      <Clock />
    </div>
  );
}

export default App;
