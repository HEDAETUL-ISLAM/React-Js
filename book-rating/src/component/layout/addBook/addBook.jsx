import React, { Component } from "react";

export class AddBook extends Component {
  clear = () => {
    document.getElementById("name").value = "";
    document.getElementById("author").value = "";
    document.getElementById("price").value = "";
    document.getElementById("description").value = "";
  };
  render() {
    return (
      <div
        className="row"
        style={{
          border: "2px solid coral",
          marginTop: "5%",
          textAlign: "center"
        }}
      >
        <form className="col s12">
          <h3>Add Book</h3>
          <hr />
          <div className="row">
            <div className="input-field col s6 ">
              <input
                id="name"
                type="text"
                className="validate"
                onChange={e => this.props.addName(e)}
              />
              <label htmlFor="name">Name</label>
            </div>

            <div className="input-field col s6 ">
              <input
                id="author"
                type="text"
                className="validate"
                onChange={e => this.props.addAuthor(e)}
              />
              <label htmlfor="author">author</label>
            </div>

            <div className="input-field col s6">
              <input
                id="price"
                type="number"
                className="validate"
                onChange={e => this.props.addPrice(e)}
              />
              <label htmlfor="price">Price</label>
            </div>

            <div className="input-field col s6">
              <input
                id="description"
                type="text"
                className="validate"
                onChange={e => this.props.AddDescription(e)}
              />
              <label htmlfor="description">description</label>
            </div>

            <div className="input-field col s4 offset-s5 ">
              <a
                style={{ marginRight: "3%" }}
                className="Small btn-floating btn-large waves-effect waves-light red"
                onClick={this.props.addBook}
              >
                <i className="material-icons">add</i>
              </a>
              <a
                className="Small btn-floating btn-large waves-effect waves-light red"
                onClick={this.clear}
              >
                <i className="material-icons">clear</i>
              </a>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddBook;
