import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "semantic-ui-css/semantic.min.css";
import SideBar from "./components/sidebar.jsx";
import axios from "axios";

class App extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "T-shirt",
        category: "shirt",
        price: "20",
        image:
          "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        description: "good shirt"
      },
      {
        id: 2,
        name: "H-pant",
        category: "pant",
        price: "30",
        image:
          "https://images.pexels.com/photos/792762/pexels-photo-792762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        description: "good pant"
      },
      {
        id: 3,
        name: "Umbrella",
        category: "colour",
        price: "20",
        image:
          "https://images.pexels.com/photos/751099/pexels-photo-751099.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        description: "good shirt"
      },
      {
        id: 4,
        name: "uw",
        category: "u",
        price: "20",
        image:
          "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        description: "good shirt"
      },
      {
        id: 5,
        name: "uw",
        category: "u",
        price: "20",
        image:
          "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        description: "good shirt"
      },
      {
        id: 6,
        name: "uw",
        category: "u",
        price: "20",
        image:
          "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        description: "good shirt"
      },
      {
        id: 7,
        name: "uw",
        category: "u",
        price: "20",
        image:
          "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        description: "good shirt"
      },
      {
        id: 8,
        name: "uw",
        category: "u",
        price: "20",
        image:
          "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        description: "good shirt"
      }
    ],
    backupProducts :[],
    SelectedProducts: [{ selected: false }],
    product: {
      id: null,
      name: null,
      category: null,
      price: 5,
      quantity: 2
    }
  };

  addItem = (e, selected) => {
    var item = e;
    item.selected = true;
    item.quantity = 1;

    if (selected) {
      var SelectedProducts = this.state.SelectedProducts;
      SelectedProducts = SelectedProducts.filter(pro => e.id != pro.id);
      this.setState({ SelectedProducts });
      var products = this.state.products;
      products = products.map(p => {
        if (p.id === e.id) p.selected = false;
        return p;
      });
      this.setState({ products });
    } else {
      this.setState({
        SelectedProducts: [...this.state.SelectedProducts, item]
      });
    }
  };

  
  componentDidMount() {
    axios.defaults.headers = {
      "Content-Type": "aplicatoin/json",
      "Authorization": "Token 623d9ed4755d01f2defbe095a27afe8350e91cf8"
    }
    axios.get("http://173.82.212.25:8000/ecom/api/products/")
      .then(res => (this.setState({ products: res.data }),this.setState({backupProducts:res.data})))
  }

  searchByTypes = (value) => {
    this.setState({ products: this.state.backupProducts })
    if(value === ""){
      return;
    }
    
    let products = [...this.state.backupProducts]
    products = products.filter(product => product.type === value)
    this.setState({ products })
  }

  searchHandle = value =>{
    this.setState({ products: this.state.backupProducts })
    let products = [...this.state.backupProducts]
    products = products.filter(product => product.type.includes(value))
    this.setState({ products })
  }

  render() {
    return (
      <div>
        <SideBar
          products={this.state.products}
          addItem={this.addItem}
          SelectedProducts={this.state.SelectedProducts}
          searchByTypes={this.searchByTypes}
          searchHandle={this.searchHandle}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
