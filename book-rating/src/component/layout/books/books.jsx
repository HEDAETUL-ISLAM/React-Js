import React, { Component } from "react";
import Rating from "./rating/rating";

export class Books extends Component {
  render() {
    return (
      <div style={{ border: "2px solid coral", marginTop: "5%" }}>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6 ">
                <input id="email" type="text" className="validate" onChange={e=>this.props.searchByName(e)}/>
                <label htmlfor="email">Search</label>
              </div>
            </div>
          </form>
        </div>

        <div style={{ border: "2px solid coral", margin: "0% 5% 5% 5%" }}>
          <table>
            <thead>
              <tr>
                <th>Book Name</th>
                <th>Author</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {this.props.books.map(e => (
                <tr>
                  <td>{e.name}</td>
                  <td>{e.author}</td>
                  <td>
                    <Rating rating={e.rating} bookId = {e.id} changeRate={this.props.changeRate}/>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Books;
