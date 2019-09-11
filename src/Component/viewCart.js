import React from 'react'
import NavBar from '../Component/Navbar/AppBar'
import Card from "../Component/viewCard"
import { Link } from 'react-router-dom'

class ViewCart extends React.Component{
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
    render(){
        let localData = localStorage.getItem("cartValue");
        localData = JSON.parse(localData)
        console.log(localData)
        console.log(this.props)
        return(
            <div>
                <NavBar cart={this.state.myCart} />
        {localData.map((data,i)=>{return <Card about={data.about} img={data.image} name={data.name} qua={data.quantity} onClick={()=>alert("you already buy this project")}/>})}
        <br />
        <br />
      
        <div>
        <center><Link to="/checkout" style = {{margin:"0px auto"}}><button>Checkout</button> </Link></center>        
        </div>
            </div>
        )
    }
}
export default ViewCart