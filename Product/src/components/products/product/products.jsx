import React, { Component } from "react";
import {
  Card,
  Icon,
  Modal,
  Button,
  Header,
  Image,
  Grid
} from "semantic-ui-react";
import Product from "./product.jsx";

import AddButton from "./addButton.jsx";
class ProductCard extends Component {
  state = {};

  addToCard = (product, selected) => {
    var SelectedProducts = this.props.SelectedProducts;

    if (selected == true) {
      var sPro = SelectedProducts.filter(p => product.id != p.id);
      console.log(sPro);
    }

    SelectedProducts.push(product);
  };

  render() {
    return (
      <div style={{ marginRight: "160px" }}>
        <Grid>
          <Grid.Row height={5}>
            {this.props.products.map(product => (
              <Product product={product} addToCard={this.props.addItem} />
            ))}
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default ProductCard;
