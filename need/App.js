import React, { Component } from 'react';
import './App.css';
import Header from './Components/header';
import ToDo from './Components/todo';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <ToDo/>
      </div>
        
      );
  }
}

export default App;
