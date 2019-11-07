import React from 'react';
import NavBar from '../../Component/Navbar/AppBar';
import Contactus from './contactus'
export default class Contact extends React.Component {

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
    render() {
        return (
            <div>
                <NavBar cart={this.state.myCart} />
                <Contactus />
                {/* <h1>Contact Page</h1> */}
            </div>
        )
    }
}