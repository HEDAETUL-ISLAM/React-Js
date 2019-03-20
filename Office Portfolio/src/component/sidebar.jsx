import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import DividerExampleVertical from './devider';
import TableExampleColors from './developerTable';
import {Route, Link} from "react-router-dom";

const SidebarExampleVisible = (props) => (
    <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation='uncover' icon='labeled' inverted vertical visible width='thin'>
           <Link to="/">
                <Menu.Item as='a'>
                    <Icon name='home' />
                    Dashbord
                </Menu.Item>
           </Link >
            <Link to="/table">
                <Menu.Item as='a'>
                    <Icon name='list' />
                    Developer List
                </Menu.Item>
            </Link>
            
            
        </Sidebar>

        <Sidebar.Pusher>
            <Segment basic>
                <div style={{ height: "100%", width: "100%" }}>
                    <Route
                        path="/"
                        render={() =>(
                            <DividerExampleVertical 
                            developer={props.developer} 
                            changeDeveloper={props.changeDeveloper} />
                        )}
                    />
                    <Route
                        path="/table"
                        render={() => (
                            <TableExampleColors />
                        )}
                    />
                    
                    
                    
                </div>
            </Segment>
            
        </Sidebar.Pusher>
    </Sidebar.Pushable>
)

export default SidebarExampleVisible;
