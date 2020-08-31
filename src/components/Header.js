import React, { Component } from 'react'
import './Header.css'
import CartItem from './CartItem'


export default class Header extends Component {
    constructor() {
        super()
        this.state = {
            cartDisplay: false,

        }

        this.handleCartDisplay = this.handleCartDisplay.bind(this)
    }





    handleCartDisplay() {
        console.log(this.state.cartDisplay)
        this.setState({ cartDisplay: !this.state.cartDisplay })
    }

    render() {
        const { changeQuantity, removeFromCart, checkout, cart } = this.props
        return (
            <header className='header'>
                <h1 className='app-name'>Build a Pc</h1>
                <button onClick={this.handleCartDisplay} className='cart-btn'>Cart</button>
                <div className={this.state.cartDisplay ? 'cart' : 'noCart'}>
                    <h2>Your Cart</h2>
                    {cart.items.map(element => {
                        return (
                            <CartItem
                                changeQuantity={changeQuantity}
                                removeFromCart={removeFromCart}
                                key={element.cartId}
                                data={element}

                            />
                        )
                    })}

                    <div className='total'>
                        <p>Your total: {cart.total}</p>
                        <button onClick={checkout}>Checkout</button>
                    </div>

                </div>
            </header>
        )
    }
}