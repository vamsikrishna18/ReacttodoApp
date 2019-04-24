import React, { Component } from 'react';
import './App.css';
import TodolistComponent from './components/todolist/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ErrorComponent from './components/Error/ErrorComponent';
import HttpComponent from './components/HttpService/HttpComponent';
import Registration from './components/Registration/Registration';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <TodolistComponent />
      // </div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={TodolistComponent} exact />
          <Route path="/httpservice" component={HttpComponent} />
          <Route path="/registration" component={Registration} />
          <Route component={ErrorComponent} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
