import React, { useEffect, useState } from 'react';
import { fetchProducts, fetchCart, addToCart, removeFromCart, updateCartQty, checkout } from './api';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import CheckoutModal from './components/CheckoutModal';

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({ items: [], total: 0 });
  const [checkoutReceipt, setCheckoutReceipt] = useState(null);

  const loadProducts = async () => {
    const ds = await fetchProducts();
    setProducts(ds);
  };

  const loadCart = async () => {
    const c = await fetchCart();
    setCart(c);
  };

  useEffect(() => {
    loadProducts();
    loadCart();
  }, []);

  const handleAdd = async (productId) => {
    await addToCart(productId, 1);
    await loadCart();
  };

  const handleRemove = async (cartItemId) => {
    await removeFromCart(cartItemId);
    await loadCart();
  };

  const handleUpdateQty = async (cartItemId, qty) => {
    if (qty < 1) return;
    await updateCartQty(cartItemId, qty);
    await loadCart();
  };

  const handleCheckout = async ({ name, email }) => {
    // prepare cartItems with product details (server expects product._id or product)
    const payload = {
      cartItems: cart.items.map(it => ({ product: it.product, qty: it.qty })),
      name,
      email
    };
    const res = await checkout(payload);
    setCheckoutReceipt(res.receipt);
    await loadCart();
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Vibe Commerce — Mock Cart</h1>
      </header>

      <main className="main">
        <ProductList products={products} onAdd={handleAdd} />
        <Cart
          cart={cart}
          onRemove={handleRemove}
          onUpdateQty={handleUpdateQty}
          onCheckoutClick={() => document.getElementById('checkout-btn')?.click()}
        />
      </main>

      <CheckoutModal onCheckout={handleCheckout} receipt={checkoutReceipt} />
    </div>
  );
}
