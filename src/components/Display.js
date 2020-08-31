import React, { Component } from 'react'
import Axios from 'axios'
import Header from './Header'


export default class Display extends Component {
    constructor() {
        super()
        this.state = {
            parts: [],
            cart: { total: 0, items: [] }
        }
    }

    componentDidMount() {
        Axios.get('/api/parts').then(res => {
            Axios.get('/api/cart').then(cartRes => {
                this.setState({
                    parts: res.data,
                    cart: cartRes.data
                })
            })
        })
            .catch(err => console.log(err.message))
    }

    addToCart(id, quantity) {
        Axios.post('/api/cart').then(res =>
            this.setState({ cart: res })
        )
    }

    changeQuantity(cartId, action) {
        Axios.put(`/api/cart/${cartId}?action=${action}`).then(res => {
            this.setState({ cart: res.data })
        })
    }

    removeFromCart(cartId) {
        Axios.delete(`/api/cart/${cartId}`).then(res => {
            this.setState({ cart: res.data })
        })
    }

    checkout() {
        Axios.delete(`/api/cart`).then(res => {
            this.setState({ cart: res.data })
        })
    }

    render() {
        return (
            <div>
                <Header />
            </div>
        )
    }
}