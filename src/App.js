import React, { Component } from 'react';
import './App.css';
import TodolistComponent from './components/todolist/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodolistComponent />
      </div>
    );
  }
}

export default App;
