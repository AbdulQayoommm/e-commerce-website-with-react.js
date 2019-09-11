import React from 'react';
// import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import Paper from '@material-ui/core/Paper';
import SimpleRating from './../Component/Rating/rating'
import Button from '@material-ui/core/Button';
import { MdShoppingCart } from 'react-icons/md';
import FooterPagePro from '../Footer/footer'
// import PrimarySearchAppBar from "./../Appbar/appbar"


class CardExample extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            disable: true,
            disabledbutton: true
        }
    }
    render() {
        let { count, disable, disabledbutton } = this.state
        console.log(count)
        return (
            <div style={{ height: "650" }}>
                <center>
                    {/* <PrimarySearchAppBar/> */}
                    <div style={{ margin: "20px", width: "700px" }}>
                        <Paper style={{ padding: 20, display: "flex" }}>
                            <div style={{ marginRight: "10px" }}>
                                <img src={this.props.data.name.img} width="300" height="300px" marginTop="980px" />
                            </div>
                            <div style={{ marginTop: '10px' }}>
                                <h2>{this.props.data.name.name}</h2>
                                <center style={{ marginLeft: "100px" }}> <SimpleRating /></center>
                                {/* <p>{props.data.name.about}</p> */}
                                <h3 style={{ color: "#9C27B0" }}>
                                    {this.props.data.name.about}
                                </h3>
                                <h3>Description</h3>
                                <p style={{ fontSize: "17px", fontWeight: "bolid" }}>100% Cotton Jersey Tank Top <br />
                                    Direct to Garment Vinyl Printed<br />
                                    A3/A4 Size Printing<br />
                                    3 to 5 days Delivery Time</p>
                                <h3>Quantity:</h3>
                                <div style={{ display: 'flex', border: '1px solid', justifyContent: "space-between", width: "44%" }}>
                                    <button disabled={disable} onClick={() => count > 1 ? this.setState({ count: count - 1 }) : this.setState({ count: count - 1, disable: true, disabledbutton: true })} style={{ height: "35px", width: "40px", backgroundColor: "#eff0f5" }}>-</button>
                                    <h5 style={{ color: "#9C27B0", marginTop: "2px" }}>{count}</h5>
                                    <button onClick={() => this.setState({ count: count + 1, disable: false, disabledbutton: false })}
                                        style={{ height: "35px", width: "40px", backgroundColor: "#eff0f5" }}>+</button>
                                </div>
                                {console.log(this.props.data, "bhudehy")}
                                <Button disabled={disabledbutton}
                                    onClick={() => this.props.click(this.props.data.name, count)} size="large" style={{ color: "#fff", backgroundColor: "#9C27B0", marginTop: "30px" }}>
                                    <MdShoppingCart />Add to Cart
                    </Button>
                            </div>
                        </Paper>
                    </div>
                </center>
                <div style={{ marginTop: "350px" }}> <FooterPagePro /></div>
            </div>
        )
    }
}

export default CardExample;