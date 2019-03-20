import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import Body from './component/body';

class App extends Component {
  render() {
    return (
      <div >
        <Header/>
        <Body/>
      </div>
    );
  }
}

export default App;
