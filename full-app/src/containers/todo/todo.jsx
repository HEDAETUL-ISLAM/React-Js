import React, { Component } from 'react';
import Items from './items';

class Todo extends Component {
    render() {
        return (
            <div className='todo'>
                <h1>ToDo List</h1>
                <Items />
            </div>
        )
    }
}
export default Todo;