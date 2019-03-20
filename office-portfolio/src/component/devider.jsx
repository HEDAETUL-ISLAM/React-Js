import React from 'react'
import { Divider, Grid, Image, Segment } from 'semantic-ui-react'
import CardExampleCard from './personal_profile';
import Skill from './profile_performance';

const DividerExampleVertical = (props) => (
    <Segment>
        <Grid columns={3} relaxed='high'>
            <Grid.Column>
                <CardExampleCard changeDeveloper ={props.changeDeveloper} developer ={props.developer}/>
            </Grid.Column>
            <Grid.Column>
                <Skill/>
            </Grid.Column>
        </Grid>
{/* 
        <Divider vertical></Divider> */}
    </Segment>
)

export default DividerExampleVertical