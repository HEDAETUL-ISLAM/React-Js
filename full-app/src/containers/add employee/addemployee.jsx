import React,{Component} from 'react';

class AddEmployee extends Component{
    render(){
        return(
            <div className="employeeInputStyle">
                <h1>Add Employee</h1>

                <label >Id:</label>
                <input id ="id" type="text" onChange={e=>this.props.addEmployeeId(e)} /> <br/>

                <label >Name:</label>
                <input id="Name" type="text" onchange={e => this.props.addEmployeeName(e)} /> <br />

                <label >Email:</label>
                <input id="email" type="text" onchange={e => this.props.addEmployeeEmail(e)} /> <br />

                <button  type="submit" name="action" onClick={this.props.addEmployee}>ADD</button>
            </div>
        )
    }
}
export default AddEmployee;