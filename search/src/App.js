import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  

  state = {
    items: "ths gosdfg  sdgois  sdfois do this anyway"
  }

  para = this.state.items;

  search = e => {
    var para = this.para;
    var value = e.target.value;
    var parts = para.split(" ")
    parts=parts.map(part => {
      if(part == value){
        return "<b>" + part + "</b>"
      }
      else if(part.includes(value)){
        
      }
      return part;
    });

    var result = "";
    parts.forEach(part => {
      result+=part+" ";
    });

    document.getElementById("para").innerHTML=result;
  }
  
  render() {
    return (
      <div className="App">
        <input type = "text" onChange={e=>this.search(e)}/>
        <p id = "para">{this.para}</p>
      </div>
    );
  }
}

export default App;
