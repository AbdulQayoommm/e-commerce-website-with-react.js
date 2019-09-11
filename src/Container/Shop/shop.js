import React from 'react'
import NavBar from '../../Component/Navbar/AppBar'

export default class Shop extends React.Component {
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
                <h1> Shop Page</h1>
            </div>
        )
    }
}