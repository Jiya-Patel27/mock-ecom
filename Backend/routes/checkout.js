const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const CartItem = require('../models/CartItem');

// POST /api/checkout  { cartItems: [{ product, qty }], name, email }
router.post('/', async (req, res) => {
  try {
    const { cartItems, name, email } = req.body;

    if (!cartItems || !Array.isArray(cartItems) || cartItems.length === 0) {
      return res.status(400).json({ error: 'cartItems required' });
    }

    // calculate total
    let total = 0;
    cartItems.forEach(ci => {
      total += (ci.product.price || ci.price) * ci.qty;
    });

    const order = new Order({
      items: cartItems.map(ci => ({ product: ci.product._id || ci.product, qty: ci.qty })),
      total,
      name,
      email
    });
    await order.save();

    // clear cart
    await CartItem.deleteMany({});

    res.json({
      receipt: {
        total,
        timestamp: order.createdAt,
        name,
        email,
        orderId: order._id
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
