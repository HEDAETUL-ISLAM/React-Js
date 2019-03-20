import React, { Component } from 'react';
import Rating from '../rating/rating'

class Books extends Component {
    render() {
        return (
            <div style={{ border: "2px solid coral", marginTop: "5%" }}>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s4 ">
                                <input id="name" type="text" className="validate" onChange={e => this.props.searchByName(e)} />
                                <label htmlfor="name">Search</label>
                            </div>
                        </div>
                    </form>
                </div>
                <div style={{ border: "2px solid coral", margin: "0% 5% 5% 5%"  }}> 
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Author</th>
                                <th>Price</th>
                                <th>Rating</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.props.books.map(book=>(
                                <tr>
                                    <td>{book.name}</td>
                                    <td>{book.author}</td>
                                    <td>{book.price}</td>
                                    <td>
                                        <Rating rating={book.rating} bookId={book.id}  changeRate={this.props.changeRate}/>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Books;

// { this.props.books.map(book => <Book name={book.name} author={book.author} />) }