import React from 'react'
import OutlinedTextFields from './AdminHome'
import Drawer from './drawer'
import firebase from '../../Config/DataBase/firebase'
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
// import { async } from 'q'

export default class AddtoCart extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    addProduct() {
        firebase.firestore().collection("prodcut").add(this.state)
        alert("data has been send")
    }

    async imageUpload(e) {
        console.log(e)
        // alert()
        let fileName = e.target.files[0].name
        let ref = firebase.storage().ref('/').child(`images/${fileName}`)
        await ref.put(e.target.files[0])
        ref.getDownloadURL().then((url)=> {
            let image = url
            this.setState({
                imageUrl: image
            })
        });
    }
    render() {
        console.log(this.state)

        return (
            <div>
                <Drawer />
                <OutlinedTextFields onchange={(e) => this.setState({ productname: e.target.value })} title="Product Name" type="text" />
                <OutlinedTextFields onchange={(e) => this.setState({ price: e.target.value })} title="Product Price" type="number" />
                <OutlinedTextFields onchange={(e) => this.setState({ description: e.target.value })} title="Description" type="text" />
                <MDBDropdown>
      <MDBDropdownToggle caret color="primary" style = {{width :"290px",marginLeft:"530px"}}>
        select category
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        
        <MDBDropdownItem name="Shirt" onClick={(e)=>this.setState({categery:e.target.name})}>Shirt</MDBDropdownItem>
        <MDBDropdownItem name="Sport Shirt" onClick={(e)=>this.setState({categery:e.target.name})}>Sport Shirt</MDBDropdownItem>
        <MDBDropdownItem name="T Shirt" onClick={(e)=>this.setState({categery:e.target.name})}>T Shirt</MDBDropdownItem>
        <MDBDropdownItem name="Pakistan Shirt" onClick={(e)=>this.setState({categery:e.target.name})}>Pakistan Shirt</MDBDropdownItem>

        {/* <MDBDropdownItem name="musical instruments" onClick={(e)=>this.setState({category:e.target.name})}>musical instruments</MDBDropdownItem>
        <MDBDropdownItem name="latest product" onClick={(e)=>this.setState({category:e.target.name})}>latest product</MDBDropdownItem> */}
      </MDBDropdownMenu>
    </MDBDropdown>


                {/* <OutlinedTextFields onchange={(e) => this.setState({ categery : e.target.value })} title='Categery' type="text" /> */}
                <OutlinedTextFields type="file" onchange={this.imageUpload.bind(this)} />

                <button onClick={this.addProduct.bind(this)} style={{ marginLeft: "480px", height: "40px", width: "400px", backgroundColor: "blue", color: "white", borderRadius: "20px" }}>Upload post</button>
            </div>
        )
    }
}