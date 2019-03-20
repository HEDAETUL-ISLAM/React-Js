import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <div className='itemEmployee'>
                {this.props.id} {this.props.name} {this.props.date}
                <button onClick={() => this.props.deleteAction(this.props.id)} >Delete</button>
            </div>
        )
    }
}
export default Item;