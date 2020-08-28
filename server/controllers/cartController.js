const parts = require('../data.json')

const cart = { total: 0, items: [] }
let cartId = 0

const updateCartTotal = () => {
    const total = cart.items.reduce((acc, element) => {
        return acc + element.price * element.quantity
    }, 0)

    cart.total = total.toFixed(2)
}

module.exports = {
    getCart: (req, res) => {
        res.status(200).send(cart)
    },

    addToCart: (req, res) => {
        const { partId, quantity } = req.body

        const index = cart.items.findIndex(element => element.id === +partId)

        if (index === -1) {
            const part = parts.find(element => element.id === +partId)

            part.cartId = cartId
            part.quantity = +quantity

            cart.items.push(part)

            cartId++
        } else (
            cart.items[index].quantity += +quantity
        )

        updateCartTotal()

        res.status(200).send(cart)
    },

    changeQuantity: (req, res) => {
        const { cart_id } = req.params
        const { action } = req.query

        const index = cart.items.findIndex(element => element.cartId === +cart_id)

        if (index === -1) {
            return res.status(404).send('Part not found')
        }

        if (action === 'up') {
            cart.items[index].quantity += 1
        } else {
            if (cart.items[index].quantity > 1) {
                cart.items[index].quantity -= 1
            } else {
                cart.items.splice(index, 1)
            }
        }

        updateCartTotal()

        res.status(200).send(cart)
    },
    removeFromCart: (req, res) => {
        const { cart_id } = req.params

        const index = cart.items.find(element => element.cart_id === +cart_id)

        if (index === -1) {
            return res.status(404).send('Item not in cart')
        }

        cart.items.splice(index, 1)

        updateCartTotal()

        res.status(404).send(cart)
    },
    checkout: (req, res) => {
        cart.total = 0
        cart.items = []

        res.status(200).send(cart)
    }
}