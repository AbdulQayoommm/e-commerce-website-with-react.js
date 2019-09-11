import React from 'react'
import { Slider } from '../../Component/'
import CardExample from '../../Card/card'
import Chips from '../../Categary/chips'
import FooterPagePro from '../../Footer/footer.js'
import NavBar from '../../Component/Navbar/AppBar'
import firebase from '../../Config/DataBase/firebase'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myCart: [],
      products: []
    }
    this.addtoCart = this.addtoCart.bind(this)
  }
  addtoCart(data) {
    let { myCart } = this.state;

    let product = {
      name: data.name,
      image: data.img,
      about: data.about,
      quantity: data.count
    }
    console.log(this.history);
    myCart.push(product);
    localStorage.setItem("cartValue", JSON.stringify(myCart));
    this.setState({
      myCart: myCart
    })

  }
  componentDidMount() {
      var cart = localStorage.getItem('cartValue');
      if (cart) {
        this.setState({
          myCart: JSON.parse(cart)
        })
      }




    let { products } = this.state;
    firebase.firestore().collection("prodcut").get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let getproducts = doc.data()
          products.push(getproducts)
          console.log(getproducts)
          this.setState({
            products: products
          })
        })
      })
  }
  // gotoproduct = (data) => {
  //   console.log(this.props)
  //   this.props.history.push("/product", data)
  //   // alert("chal raha hai")
  // }
  func = (data) => {
    this.props.history.push("/product", { name: data })
  }

  filter = (cat) => {
    let { products } = this.state;
    products = []
    firebase.firestore().collection("prodcut").where('categery', '==' , cat).get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let getproducts = doc.data()
          products.push(getproducts)
          console.log(getproducts)
          this.setState({
            products: products
          })
        })
      })
    alert('Hello World')
  }
  render() {
    console.log(this.state.products)
    let { products } = this.state;
    return (
      <div>
        <NavBar cart={this.state.myCart} />


        <Slider />
        <div style={{marginLeft:'40%' }}>
          
        <Chips name='Shirt' onclick ={()=>this.filter('Shirt')}/>
        <Chips name='Sport Shirt' onclick ={()=>this.filter('Sport Shirt')}/>
        <Chips name='Pakistan Shirt' onclick ={()=>this.filter('Pakistan Shirt')}/>
        <Chips name='T Shirt' onclick ={()=>this.filter('T Shirt')}/>

        </div>

        {products.map((val, i) => { return <CardExample func={this.func} img={val.imageUrl} about={val.price} name={val.productname} discription={val.description} /> })}
        <FooterPagePro />
      </div>
    )
  }
}