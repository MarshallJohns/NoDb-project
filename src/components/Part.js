import React, { Component } from 'react'

export default class Part extends Component {
    constructor() {
        super()
        this.state = {
            quantity: 0
        }
    }

    handleChangeQuantity(action) {
        if (action === 'up') {
            this.setState({ quantity: this.state.quantity + 1 })
        }
        else {
            if (this.state.quantity > 0) {
                this.setState({ quantity: this.state.quantity - 1 })
            }
        }
    }

    handleAddToCart() {
        this.props.addToCart(this.props.data.id, this.state.quantity)
        this.setState({ quantity: 0 })
    }


    render() {
        const { name, image, price, partType, chipset } = this.props.data
        return (
            <div className='Part'>
                <img src={image} />
                <p >{name}</p>
                <p className='price'>${price}</p>

                <div className='btn-container'>
                    <button onClick={() => this.handleChangeQuantity('down')}>Less</button>
                    <p >{this.state.quantity}</p>
                    <button onClick={() => this.handleChangeQuantity('up')}> More </button>
                </div>

                {this.state.quantity ? <button className='add-cart' onClick={() => this.handleAddToCart()}>Add to Cart</button> : null}
            </div>
        )
    }
}