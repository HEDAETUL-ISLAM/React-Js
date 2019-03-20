import React, {Component} from 'react'
import { Card, Icon, Image,Button } from 'semantic-ui-react'
import hedaet from '../image/hedaet.jpg'
import PopupExampleFlowing from './edit_personal_profile'
import axios from"axios";


const CardExampleCard =(props)=>

    // state={
    //     developer:{
    //         name:"Hedaetul Islam",
    //         imege:"1 january 2019",
    //         address:"Programmer & Instructor",
    //         email:"01948510951"
    //     }
    // }

    // componentDidMount(){
    //     axios.get("http://173.82.212.25:8000/maveinfo/api/developers/82/")
    //     .then(res=> setState({developer:res.data}))
    // }
    // changeDeveloper=(e,property)=>{
    //     var pro=e.target.value
    //     let developer = {... state.developer}
    //     developer[property]=pro;
    //      setState({
    //         developer
    //     })
    // }

    // updateDeveloper(){
    //     console.log( state.developer)
    //     axios.post("http://173.82.212.25:8000/maveinfo/api/developers/", state.developer)
    //     .then(res=>console.log(res.data))
    // }

    
            (
            <Card>
                <Image src={ props.developer.imege} />
                <Card.Content>
                    <Card.Header>{ props.developer.name}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{ props.developer.email}</span>
                    </Card.Meta>
                    <Card.Description>{ props.developer.about}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a >
                        <Icon name='phone' />
                        { props.developer.phone}
                    </a>
                <PopupExampleFlowing developer={props.developer} changeDeveloper={ props.changeDeveloper} />
                    
                </Card.Content>
            </Card>
            )
        


export default CardExampleCard