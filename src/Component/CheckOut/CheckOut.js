import React from 'react'
import '../CheckOut/checkOut.css'
import AppBar from '../Navbar/AppBar'
import firebase from '../../Config/DataBase/firebase'
import {Link} from 'react-router-dom'
export default class CheckOut extends React.Component {
  constructor() {
    super()
    this.state = {
      myCart: []
    }
  }

  componentDidMount() {
    var cart = localStorage.getItem('cartValue');
    if (cart) {
      this.setState({
        myCart: JSON.parse(cart)
      })
    }
  }

  submit = () => {
    alert("suejhh")
    firebase.firestore().collection("orders").add(this.state)

  }
  render() {
    console.log(this.state)
    return (
      <div >
        <AppBar cart={this.state.myCart} />
        <div className="row" style={{ width: "70%", margin: "auto" }} >
          <div className="col-75">
            <div className="container">
              <div>

                <div className="row">
                  <div className="col-50">
                    <h3>Billing Address</h3>
                    <label for="fname"><i className="fa fa-user"></i> Full Name</label>
                    <input className = 'input1' type="text" onChange={(e) => this.setState({ fname: e.target.value })} id="fname" name="firstname" placeholder="Enter Your full name" />
                    <label for="email"><i name="fa fa-envelope"></i> Email</label>
                    <input className = 'input1' type="text" onChange={(e) => this.setState({ email: e.target.value })} id="email" name="email" placeholder="xyz@example.com" />
                    <label for="adr"><i name="fa fa-address-card-o"></i> Address</label>
                    <input className = 'input1' type="text" onChange={(e) => this.setState({ address: e.target.value })} id="adr" name="address" placeholder="Enter your Address" />
                    <label for="city"><i name="fa fa-institution"></i> City</label>
                    <input className = 'input1' type="text" onChange={(e) => this.setState({ city: e.target.value })} id="city" name="city" placeholder="Enter Your City Name" />

                    <div className="row">
                      <div className="col-50">
                        <label for="state">State</label>
                        <input className = 'input1' type="text" onChange={(e) => this.setState({ state: e.target.value })} id="state" name="state" placeholder="Enter your State" />
                      </div>
                      <div className="col-50">
                        <label for="zip">Zip</label>
                        <input className = 'input1' type="text" onChange={(e) => this.setState({ state: e.target.value })} id="zip" name="zip" placeholder="Enter Zip Code" />
                      </div>
                    </div>
                  </div>

                  <div className="col-50">
                    <h3>Payment</h3>
                    <label for="fname">Accepted Cards</label>

                    <label for="cname">Name on Card</label>
                    <input className = 'input1' type="text" onChange={(e) => this.setState({ cardName: e.target.value })} id="cname" name="cardname" placeholder="Name On Card" />
                    <label for="ccnum"  >Credit card number</label>
                    <input className = 'input1' type="text" onChange={(e) => this.setState({ cardNumber: e.target.value })} id="ccnum" name="cardnumber" placeholder="Enter Your Credit Card Numbre" />
                    <label for="expmonth">Exp Month</label>
                    <input className = 'input1' type="text" onChange={(e) => this.setState({ expMonth: e.target.value })} id="expmonth" name="expmonth" placeholder="Enter Expiry Month" />

                    <div className="row">
                      <div className="col-50">
                        <label for="expyear">Exp Year</label>
                        <input className = 'input1' type="text" onChange={(e) => this.setState({ expYear: e.target.value })} id="expyear" name="expyear" placeholder="Enter Expiry Month" />
                      </div>
                      <div className="col-50">
                        <label for="cvv">CVV</label>
                        <input className = 'input1' type="text" onChange={(e) => this.setState({ cvv: e.target.value })} id="cvv" name="cvv" placeholder="352" />
                      </div>
                    </div>
                  </div>

                </div>
                <label>
                  <input className = 'input1' type="checkbox" onChange={(e) => this.setState({ checked: e.target.value })} checked="checked" name="sameadr" /> Shipping address same as billing
                  </label>
                  
                <button onClick={this.submit} type="submit" className="btn">Continue to checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}