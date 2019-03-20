import React, { Component } from 'react';
import Item from './item';

class Items extends Component {

    state = {
        items: [
            { id: 1, todo: ". Walk up ", date: " 12 " },
        ]
    }

    addItem = () => {
        var items = this.state.items;
        var todo = document.getElementById('input').value;
        var item = { id: items.length + 1, todo: todo, date: "" };
        if (todo != null) {
            items.push(item);
            this.setState({
                items
            });
        }


    }
    deleteItem = (id) => {
        var items = this.state.items.filter(e => e.id != id);
        this.setState({
            items
        });
    }
    render() {
        return (
            <div className='items'>
                {this.state.items.map(
                    e => <Item
                        key={e.id}
                        id={e.id}
                        todo={e.todo}
                        date={e.date}
                        deleteItem={this.deleteItem} />
                )}

                <input type='text' id='input' className='customInput' />
                <button onClick={this.addItem} className='customButton'>+</button>

            </div>
        )
    }
}
export default Items;