import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home, Shop, Login, Signup, About, Contact, Cart, ViewCart, AdminPanel, Addtocart, Drawer, CheckOut } from '../../Container'
import Product from '../../Container/product'


export default class Router1 extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Route exact path="/" component={Home} />
                    <Route path="/shop" component={Shop} />
                    <Route path="/about" component={About} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/product" component={Product} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/viewCart" component={ViewCart} />
                    <Route path="/admin" component={AdminPanel} />
                    <Route path="/drawer" component={Drawer} />
                    <Route path="/addtocart" component={Addtocart} />
                    <Route path="/checkout" component={CheckOut} />




                </Router>
            </div>
        )
    }
}