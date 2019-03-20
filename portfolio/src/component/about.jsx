import React, {Component} from 'react';
import image from "../image/hedaet.jpg"


class About extends Component{
    render(){
        return(
            <div className="card mb-3 about" style={{maxWidth:"80%"}}>
                <div class="row no-gutters">
                    <div class="col-md-4 imageDiv">
                        <img src={image} class="card-img" alt="..."/>
                    </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h3 class="card-title"> Hedaetul Islam</h3><hr/>
                                <p className="text-muted">Programmer & Instructor</p>
                                <div>
                                    <table class="table">
                                        
                                        <tbody>
                                            <tr>
                                                <td class="text-muted">Age</td>
                                                <td>:</td>
                                                <td>23 years</td>
                                            </tr>
                                            <tr>
                                                <td class="text-muted">Email</td>
                                                <td>:</td>
                                                <td className='special-font'>bulbulhedaytulislam@gmail.com</td>
                                            </tr>
                                            <tr>
                                                <td class="text-muted">Phone</td>
                                                <td>:</td>
                                                <td>+8801948510951</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
export default About;