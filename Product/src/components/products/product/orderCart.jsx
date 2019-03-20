import React, { Component } from "react";
import {
  Button,
  Header,
  Card,
  Icon,
  Image,
  Modal,
  Table
} from "semantic-ui-react";

export class OrderCart extends Component {
  render() {
    return (
      <Modal
        trigger={
          <Button size="large" primary animated>
            <Button.Content hidden>Cart</Button.Content>
            <Button.Content visible>
              <Icon name="shop" />
            </Button.Content>
          </Button>
        }
      >
        <Modal.Header>Selected Items</Modal.Header>
        <Table.Header >
          <Table.Row>
            <Table.HeaderCell>Category</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Quantity</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {this.props.SelectedProducts.map(e => (
          <Modal.Content image scrolling>
            <Modal.Description>
              <Card fluid color="red" header="selected Item">
                <Table celled inverted selectable>
                  

                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>{e.category}</Table.Cell>
                      <Table.Cell>{e.name}</Table.Cell>
                      <Table.Cell>{e.Quantity}</Table.Cell>
                      <Table.Cell textAlign="right">{e.price}</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>

              </Card>
            </Modal.Description>
          </Modal.Content>
        ))}
        <Modal.Actions>
          <Button primary>
            Proceed <Icon name="chevron right" />
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default OrderCart;






