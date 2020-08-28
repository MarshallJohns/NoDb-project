import React, { Component } from 'react'
import './Header.css'
import Axios from 'axios'


export default class Header extends Component {
    constructor() {
        super()
        this.state = {
            cartDisplay: false,
            cart: []
        }

        this.handleCartDisplay = this.handleCartDisplay.bind(this)
    }

    componentDidMount() {
        Axios.get('/api/cart').then(res => {
            this.setState({ cart: res.data })
        })
    }



    handleCartDisplay() {
        console.log(this.state.cartDisplay)
        this.setState({ cartDisplay: !this.state.cartDisplay })
    }

    render() {
        return (
            <header className='header'>
                <h1 className='app-name'>Build a Pc</h1>
                <button onClick={this.handleCartDisplay} className='cart-btn'>Cart</button>
                <div className={this.state.cartDisplay ? 'cart' : 'noCart'}></div>
            </header>
        )
    }
}