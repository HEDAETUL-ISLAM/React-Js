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

class Product extends Component {
  render() {
    var e = this.props.product;
    var shop = "Add";
    if (e.selected === true) shop = "Remove";
    else shop = "Add";
    return (
      <Grid.Column floated="left" mobile={16} tablet={8} computer={4}>
        <Card style={{ marginBottom: "10%", zIndex: "1", width: "100%" }}>
          <Modal
            basic
            size="small"
            trigger={
              <div style={{ height: "100%", width: "100%", cursor: "pointer" }}>
                <Image
                  size="medium"
                  src={e.image}
                  style={{ height: "200px", width: "220px", margin: "auto" }}
                />

                <Card.Content>
                  <Card.Header>{e.name}</Card.Header>
                  <Card.Meta>
                    <span className="date">${e.price}</span>
                  </Card.Meta>
                  <Card.Description>{e.discription}</Card.Description>
                </Card.Content>
                <Card.Content>
                  <Card.Description>
                    <a>{e.category}</a>
                  </Card.Description>
                </Card.Content>
              </div>
            }
          >
            <Modal.Header>
              <h1>{e.category}</h1>
            </Modal.Header>
            <Modal.Content image>
              <Image wrapped size="large" src={e.image} />
              <Button.Content hidden> + </Button.Content>
              <Modal.Description>
                <Header style={{ color: "#99ff66" }}>
                  <h3>{e.name}</h3>
                </Header>
                <p>{e.description}</p>

                <Button size="small" inverted color="red" animated="vertical">
                  <Button.Content hidden> Close </Button.Content>
                  <Button.Content visible>
                    <Icon name="cancel" />
                  </Button.Content>
                </Button>
              </Modal.Description>
            </Modal.Content>
          </Modal>

          <Card.Content extra>
            <Button
              animated="vertical"
              style={{
                float: "right",
                zIndex: "2"
              }}
              color="red"
              onClick={() => this.props.addToCard(e, e.selected)}
            >
              <Button.Content hidden>{shop}</Button.Content>
              <Button.Content visible>{shop}</Button.Content>
            </Button>
          </Card.Content>
        </Card>
      </Grid.Column>
    );
  }
}

export default Product;
