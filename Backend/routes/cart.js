const express = require('express');
const router = express.Router();
const CartItem = require('../models/CartItem');
const Product = require('../models/Product');

// GET /api/cart -> return cart items with populated product + total
router.get('/', async (req, res) => {
  const items = await CartItem.find({}).populate('product');
  const total = items.reduce((sum, it) => sum + (it.product.price * it.qty), 0);
  res.json({ items, total });
});

// POST /api/cart -> add { productId, qty }
router.post('/', async (req, res) => {
  const { productId, qty = 1 } = req.body;
  if (!productId) return res.status(400).json({ error: 'productId required' });

  // if same product exists, increment qty
  let item = await CartItem.findOne({ product: productId });
  if (item) {
    item.qty += qty;
    await item.save();
  } else {
    item = new CartItem({ product: productId, qty });
    await item.save();
  }
  const populated = await item.populate('product');
  res.status(201).json(populated);
});

// DELETE /api/cart/:id -> deletes cart item by cart item id
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const deleted = await CartItem.findByIdAndDelete(id);
  if (!deleted) return res.status(404).json({ error: 'Item not found' });
  res.json({ success: true });
});

// PATCH /api/cart/:id -> update qty (optional helper)
router.patch('/:id', async (req, res) => {
  const { qty } = req.body;
  const id = req.params.id;
  const item = await CartItem.findById(id);
  if (!item) return res.status(404).json({ error: 'Item not found' });
  item.qty = qty;
  await item.save();
  const populated = await item.populate('product');
  res.json(populated);
});

module.exports = router;
