import React from "react";
import { Header, Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react";

import DividerHorizontal from "./products/devider.jsx";

const SideBar = props => (
  <Sidebar.Pushable as={Segment}>
    <Sidebar as={Menu} icon="labeled" inverted vertical visible width="thin">
      <Menu.Item as="a">
        <Icon name="list" />
        All Products
      </Menu.Item>
      
    </Sidebar>

    <Sidebar.Pusher>
      <Segment basic>
        <div style={{ height: "100%px", width: "100%" }}>
          <DividerHorizontal
            products={props.products}
            addItem={props.addItem}
            SelectedProducts={props.SelectedProducts}
            searchByTypes={props.searchByTypes}
            searchHandle={props.searchHandle}
          />
        </div>
      </Segment>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

export default SideBar;
