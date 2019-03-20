import React, { Component } from 'react';

class AddBook extends Component {

    clear=()=>{
        document.getElementById("name").value="";
        document.getElementById("author").value="";
        document.getElementById("price").value=0;
        document.getElementById("description").value="";
    }


    render() {
        return (
            <div class="row" style={{ border: "2px solid coral" ,margin:"5% 10% 15% 10%"}}>
                <form class="col s12">
                    <div class="row">
                        <h3>Add Book</h3>
                        <div class="input-field col s8 offset-s2">
                            <input  id="name" type="text" class="validate" onChange={e => this.props.buildBook(e)} />
                            <label for="name">Name</label>
                        </div>
                        <div class="input-field col s8 offset-s2">
                            <input  id="author" type="text" class="validate" onChange={e => this.props.buildBook(e)} />
                            <label for="description">Author</label>
                        </div>
                        <div class="input-field col s8 offset-s2">
                            <input   id="price" type="text" class="validate" onChange={e => this.props.buildBook(e)} />
                            <label for="description">Price</label>
                        </div>
                        <div class="input-field col s8 offset-s2">
                            <input  id="description" type="text" class="validate" onChange={e => this.props.buildBook(e)} />
                            <label for="description">Description</label>
                        </div>
                        <div class="input-field col s8 offset-s2">
                            <a class="btn-floating btn-large waves-effect waves-light red" onClick={this.props.addBook}><i class="material-icons">add</i></a>

                            <a class="btn-floating btn-large waves-effect waves-light red" onClick={this.clear}><i class="material-icons">close</i></a>
                        </div>

                    </div>
                </form>
            </div>
        )
    }
}

export default AddBook;