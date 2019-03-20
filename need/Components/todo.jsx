import React, {Component} from "react"
import Item from "./item";

class ToDo extends Component{

    state={
        items:[
            { id: 1, name: "item for 1 ", date: Date },
            { id: 2, name: "item for 1 ", date: Date },
        ]
    }
    addItems = () => {
        var items = this.state.items;
        var itemName = document.getElementById("input").value;
        var item = { id:items, name: itemName, date: Date};
        items.push(item);
        this.setState({items});

        document.getElementById("input").value = '';
    }

    deleteItem = id =>{
        var items = this.state.items.filter(e=> e.id !=id);
        this.setState({items});
    }
    render(){
        return(
            <div className='todo'>
                {this.state.items.map(e=><Item key ={e.id} id = {e.id} name ={e.name} date ={e.date} deleteAction = {this.deleteItem}/>)}
                <input id="input" type ="text"  className='customInput'/>
                <button onClick={this.addItems} className ='custombutton'>Add More</button>
            </div>
        )
    }
}
export default ToDo;
