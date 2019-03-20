import React, {Component} from 'react';
import About from './about';
import Skill from './skill';



class Body extends Component{
    render(){
        return(
            <div >
                <div id="bg-image" ></div>
                <div className="body" id="about">
                    
                    <About dark={true} id="about"/>
                       
                    <Skill dark={true} id ="skill"/>
                </div>
            </div>
        )
    }
}
export default  Body;