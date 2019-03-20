import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Items from './containers/employee/employee';
import AddEmployee from './containers/add employee/addemployee';
import ToDo from './containers/todo/todo';
import Header from './containers/sidebar/header'

class App extends Component {
  render() {
    return (
      <div>
        <div><Header /></div>
        <div><Items /><AddEmployee /><ToDo /></div>
      </div>
    );
  }
}

export default App;

