import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SidebarExampleVisible from './component/sidebar'
import axios from "axios";
import {BrowserRouter} from "react-router-dom";


class App extends Component {
  state = {
    developer: {
      name: "Hedaetul Islam",
      imege: "1 january 2019",
      address: "Programmer & Instructor",
      email: "01948510951"
    }
  }

  componentDidMount() {
    axios.get("http://173.82.212.25:8000/maveinfo/api/developers/82/")
      .then(res =>{
        this.setState({ developer: res.data })
        console.log(res.data)
      } )
  }
  changeDeveloper = (e, property) => {
    var pro = e.target.value
    let developer = { ...this.state.developer }
    developer[property] = pro;
    this.setState({
      developer
    })
  }
  
  render() {
    return (
      <BrowserRouter>
        <div >
          <SidebarExampleVisible developer={this.state.developer} changeDeveloper={this.changeDeveloper}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
