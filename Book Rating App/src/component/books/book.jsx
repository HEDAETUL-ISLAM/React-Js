import React, { Component } from 'react';

class Book extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.author}</td>
            </tr>
        )
    }
}

export default Book;