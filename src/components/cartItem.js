import React from 'react'

export default function CartItem(props) {

    const { image, name, quantity, price, cartId } = props.data
    const { changeQuantity, removeFromCart } = props
    return (
        <div className='cart-item'>
            <img src={image} />
            <div>
                <p>{name}</p>
                <p>{quantity}</p>
                <p>{price}</p>
                <div className='btn-hold'>
                    <button className='up-down' onClick={() => changeQuantity((cartId), 'down')}>-</button>
                    <button className='remove' onClick={() => removeFromCart(cartId)}>Remove</button>
                    <button className='up-down' onClick={() => changeQuantity((cartId), 'up')}>+</button>
                </div>
            </div>
        </div>
    )
}