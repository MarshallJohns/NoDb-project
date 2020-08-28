const express = require('express')
const app = express()
const partCtrl = require('./controllers/partController')
const cartCtrl = require('./controllers/cartController')

app.use(express.json())
const SERVER_PORT = 4242

// Part controller
app.get('/api/parts', partCtrl.getPart)


// Cart Controller 
app.get('/api/cart', cartCtrl.getCart)
app.post('/api/cart', cartCtrl.addToCart)
app.put('/api/cart/:cart_id', cartCtrl.changeQuantity)
app.delete('/api/cart/:cart_id', cartCtrl.removeFromCart)
app.delete('/api/cart', cartCtrl.checkout)


app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))
