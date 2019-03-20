import React, { Component } from "react";

export class Rate extends Component {

   
  render() {
    return (
      
          <i className="material-icons" onClick = {()=>this.props.changeRate(this.props.bookId,this.props.serial)}>{this.props.name}</i>
      
    );
  }
}

export default Rate;
