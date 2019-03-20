import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header/header';
import AddBook from './component/add book/addBook';
import Books from './component/books/books';

class App extends Component {

  state = {
    books: [
      { id: 1, name: "Story", author: "ninad", price: 12, description: "Good book", rating: ["star_border", "star_border", "star_border", "star_border", "star_border"]},
      { id: 2, name: "Poem", author: "ninad", price: 21, description: "Bad book", rating: ["star_border", "star_border", "star_border", "star_border", "star_border"]},
    ],

    book: { name: "", author: "", price: 0, description: ""}
  }

  buildBook = (e) => {
    var value = e.target.value
    var name = e.target.id
    console.log(name)
    var book = {...this.state.book}
    book[name] = value;
    this.setState({
      book
    })
  }


  addBook = () => {
    var books = [...this.state.books]
    var book={...this.state.book}
    book.rating = ["star_border", "star_border", "star_border", "star_border", "star_border"]
    this.setState({book})
    books.push(book)

    this.setState({ books })

    console.log(this.state.books)
  }

  searchByName=name=>{
    var books = [...this.state.books];
    books.filter(e=>e.name==name);
    this.setState({
      books
    })
  }

  changeRate=(id,num)=>{
    var books=[...this.state.books];
    var book=books.filter(e=>e.id == id);
    var rating=book[0].rating.map((e,i)=>{
      if(i <= num){
        return "star";
      }
      else if(i >= num){
        return "star_border";
      }
      else{
        return "star_border";
      }
    })

    book[0].rating=rating;
    books.map(e=>{
      if(id == e.id){
        return book[0];
      }
      return e;
    })

    this.setState({books})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddBook addBook={this.addBook} buildBook={this.buildBook} book = {this.state.book}/>
        <Books books={this.state.books} searchByName={this.searchByName} changeRate={this.changeRate}/>
      </div>
    );
  }
}

export default App;
