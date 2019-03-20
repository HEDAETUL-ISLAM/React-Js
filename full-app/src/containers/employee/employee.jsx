import React, { Component } from 'react';
import Item from "./item";

class Items extends Component {

    state = {
        items: [
            { id: 1, name: "name ", date: "date" },
            { id: 2, name: "name ", date: "date" },
        ]
    }
    addEmployeeId = () => {
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
    deleteEmployee = id => {
        var items = this.state.items.filter(e => e.id != id);
        this.setState({ items });
    }

    render() {
        return (
            <div className='itemsEmployee'>

                <h1>Employee</h1>
                {this.state.items.map(e => <Item key={e.id} id={e.id} name={e.name} date={e.date} deleteAction={this.deleteEmployee} />)}
            </div>
        )
    }
}

export default Items;