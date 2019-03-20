import React, { Component } from "react";
import "./App.css";
import Header from "./component/header/header";
import Layout from "./component/layout/layout";

class App extends Component {
  state = {
    books: [
      {
        id: 1,
        name: "xyz",
        author: "xyz",
        price: 20,
        description: "zxcvbn",
        rating: ["star","star","star","star_border","star_border",]
      },
      {
        id: 2,
        name: "xyz",
        author: "xyz",
        price: 20,
        description: "zxcvbn",
        rating: ["star","star","star","star_border","star_border",]
      },
      {
        id: 3,
        name: "xyz",
        author: "xyz",
        price: 20,
        description: "zxcvbn",
        rating: ["star","star","star","star_border","star_border",]
      }
    ],
    navigations: [
      { id: 1, name: "manu" },
      { id: 2, name: "mainabout" },
      { id: 3, name: "layout" }
    ],
    book: [
      {
        id: null,
        name: "",
        author: "",
        price: "",
        description: "",
        rating: ["star","star","star","star","star"]
      }
    ]
  };
  addName = e => {
    var book = { ...this.state.book };
    book.name = e.target.value;
    this.setState({ book });
  };
  addAuthor = e => {
    var book = { ...this.state.book };
    book.author = e.target.value;
    this.setState({ book });
  };
  addPrice = e => {
    var book = { ...this.state.book };
    book.price = e.target.value;
    this.setState({ book });
  };
  AddDescription = e => {
    var book = { ...this.state.book };
    book.description = e.target.value;
    this.setState({ book });
  };
  addBook = () => {
    var books = [...this.state.books];
    books.push(this.state.book);
    this.setState({ books });
  };
  searchByName=name=>{
    var books=[...this.state.books];
    books.filter(e=>e.name===name);
    this.setState({
      books
    })
  }

  changeRate = (id, num)=>{



    var books = [...this.state.books];
    var book = books.filter(e=>e.id === id);


    var rating=book[0].rating.map((e,i)=>{
      if(i <= num) return "star";
      else return "star_border";
    })

    book[0].rating = rating;

    books.map(e=>{
      if(id===e.id){
        return book[0];
      }
      return e;
    })

    this.setState({books})

    console.log(this.state.books)

  }

  render() {
    return (
      <div>
        <Header navigations={this.state.navigations} />
        <Layout
          addName={this.addName}
          addAuthor={this.addAuthor}
          addPrice={this.addPrice}
          AddDescription={this.AddDescription}
          addBook={this.addBook}
          clear={this.clear}
          books={this.state.books}
          searchByName={this.searchByName}
          key={this.state.books.id}
          changeRate={this.changeRate}
        />
      </div>
    );
  }
}

export default App;
