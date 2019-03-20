import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";
export class AddButton extends Component {
  render() {
    return (
      <div>
        <Button
          onClick={() => this.props.addItem(this.props.item)}
          floated="right"
          animated="fade"
        >
          <Button.Content hidden>Shop</Button.Content>
          <Button.Content visible>
            <Icon name="shop" />
          </Button.Content>
        </Button>
      </div>
    );
  }
}

export default AddButton;
