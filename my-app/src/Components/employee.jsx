import React, {Component} from 'react';
import Item from "./item";

class Items extends Component{

    state = {
        items: [
            { id: 1, name: "name ", date: "date" },
            { id: 2, name: "name ", date: "date" },
        ]
    }
    deleteItem = id => {
        var items = this.state.items.filter(e => e.id != id);
        this.setState({ items });
    }
    render(){
        return(
            <div className='items'>
                <h className='br'>Employee List</h>
                {this.state.items.map(e => <Item key={e.id} id={e.id} name={e.name} date={e.date} deleteAction={this.deleteItem}/>)}
            </div>
        )
    }
}

export default Items;