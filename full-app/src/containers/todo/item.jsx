import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <div className='item'>
                {this.props.id}{this.props.todo}{this.props.date}
                <button onClick={() => this.props.deleteItem(this.props.id)} className='deleteButtonCustom'>X</button>
            </div>
        )
    }
}
export default Item;