import React from "react";
import { Button, Divider, Input, Segment, Grid } from "semantic-ui-react";
import DropDown from "./dropDownChoice.jsx";
import ProductCard from "./product/products.jsx";
import OrderCart from "./product/orderCart.jsx";

const DividerHorizontal = props => (
  <Segment basic textAlign="center">
    <Grid>
      <Grid.Row height={5}>
        <Grid.Column floated="left" mobile={16} tablet={8} computer={5}>
            <DropDown products={props.products} searchByTypes={props.searchByTypes}/>
        </Grid.Column>

        <Grid.Column floated="left" mobile={16} tablet={8} computer={5}>
          <Input icon="search" iconPosition="left" placeholder="Search" onChange={e=>props.searchHandle(e.target.value)}/>
        </Grid.Column>

        <Grid.Column width={5}>
          <OrderCart SelectedProducts={props.SelectedProducts} />
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Divider horizontal>---</Divider>
    <ProductCard products={props.products} addItem={props.addItem} />
  </Segment>
);

export default DividerHorizontal;
