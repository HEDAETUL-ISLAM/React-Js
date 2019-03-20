import React from 'react'
import { Header, Button, Popup, Grid ,Icon, TextArea} from 'semantic-ui-react'

const PopupExampleFlowing = (props) => (
    <Popup trigger={<Button basic color='standard' floated='right' >
        <Icon name='pencil' />
    </Button>} flowing on="click">

        <Grid centered divided columns={4}>
            <Grid.Column textAlign='center'>
                <Header as='h4'>Name</Header>
                <p>
                    <TextArea value={props.developer.name} style={{ minHeight: 20 }} onChange={e=>props.changeDeveloper(e,"name")}/> 
                </p>
            </Grid.Column>
            <Grid.Column textAlign='center'>
                <Header as='h4'>Join Date</Header>
                <p>
                    <TextArea placeholder={props.developer.joinDate} style={{ minHeight: 20 }} onChange={e => props.changeDeveloper(e, "joinDate")} />
                </p>
            </Grid.Column>
            <Grid.Column textAlign='center'>
                <Header as='h4'>About</Header>
                <p>
                    <TextArea placeholder={props.developer.about} style={{ minHeight: 20 }} onChange={e => props.changeDeveloper(e, "about")}/>
                </p>
            </Grid.Column>
            <Grid.Column textAlign='center'>
                <Header as='h4'>Phone</Header>
                <p>
                    <TextArea placeholder={props.developer.phone} style={{ minHeight: 20 }} onChange={e => props.changeDeveloper(e, "phone")}/>
                </p>
            </Grid.Column>
        </Grid>
    </Popup>
)

export default PopupExampleFlowing