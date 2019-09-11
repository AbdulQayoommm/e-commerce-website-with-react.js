import React from 'react';
import CardExample from '../Component/singleproduct'
import NavBar from '../Component/Navbar/AppBar'
// import Router from './Config/Router/route'

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myCart: []
    }
    this.addtoCart = this.addtoCart.bind(this)
  }
  addtoCart(data, counter) {
    console.log(counter)
    const { myCart } = this.state;
    let product = {
      name: data.name,
      image: data.img,
      about: data.about,
      quantity: counter,
    }
    console.log(product);
    myCart.push(product);
    this.setState({
      myCart
    })
    localStorage.setItem("cartValue", JSON.stringify(myCart));

  }
  componentDidMount() {
    var cart = localStorage.getItem('cartValue');
    if (cart) {
      this.setState({
        myCart: JSON.parse(cart)
      })
    }
  }
  render() {
    console.log(this.props.history.location.state);
    return (
      <div>
        <NavBar cart={this.state.myCart} />
        {/* <Router /> */}
        {/* <h1>Product Page</h1> */}
        <CardExample click={this.addtoCart} data={this.props.history.location.state} />
      </div>
    );
  }
}
export default Product;
