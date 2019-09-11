import React from 'react'
import PersistentDrawerLeft from './drawer.js'
// import Addtocart from './AddtoCart'
export default class AdminPanel extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        console.log(this.state)
        return (
            <div>

                <PersistentDrawerLeft />
            </div>
        )
    }
}