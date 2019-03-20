import React, { Component } from 'react'
import AddBook from './addBook/addBook';
import Books from './books/books';

export class Layout extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s10 offset-s1">
             <AddBook
                 addName={this.props.addName}
                 addAuthor={this.props.addAuthor} 
                 addPrice={this.props.addPrice}
                 AddDescription={this.props.AddDescription}
                 addBook={this.props.addBook}
                 clear={this.props.clear}
                />
            <Books books={this.props.books} searchByName={this.props.searchByName} changeRate={this.props.changeRate}/>
        </div>
      </div>
    )
  }
}

export default Layout
