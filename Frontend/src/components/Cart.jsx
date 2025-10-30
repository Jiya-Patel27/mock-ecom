import React from 'react';

export default function Cart({ cart, onRemove, onUpdateQty }) {
  let t = cart.total;
  return (
    <aside className="cart">
      <h2 style={{ textAlign: 'center' }}>Your Cart</h2>
      <div>
        {cart.items.length === 0 && <div className="small">Cart is empty</div>}
        {cart.items.map(it => (
          <div className="cart-item" key={it._id}>
            <img src={it.product.image || 'https://via.placeholder.com/48'} alt={it.product.name} />
            <div style={{ flex: 1 }}>
              <div>{it.product.name}</div>
              <div className="small">₹{it.product.price} x {it.qty} = ₹{it.product.price * it.qty}</div>
              <div style={{ marginTop: 6 }}>
                <div className="qty">
                  <button className="btn" style={{ margin: 0 }} onClick={() => onUpdateQty(it._id, it.qty - 1)}>-</button>
                  <div style={{ padding: '6px 10px', background: '#f0f0f0', borderRadius: 6 }}>{it.qty}</div>
                  <button className="btn" style={{ margin: 0 }} onClick={() => onUpdateQty(it._id, it.qty + 1)}>+</button>
                  <button className="btn btn_remove" onClick={() => onRemove(it._id)}>Remove</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="total">Total: ₹{cart.total}</div>

      <div style={{ marginTop: 10 }}>
        <button id="checkout-btn" className="btn" onClick={() => {
          if (t <= 0) return alert('Your cart is Empty! Add products in your cart for checkout.');
          else {
            // show native prompt for quick flow (or open modal)
            const name = prompt('Name:');
            const email = prompt('Email:');
            if (!name || !email) return alert('Name & email required');
            // create synthetic click to trigger checkout modal via global event or call API directly
            // For simplicity we use custom event dispatch:
            window.dispatchEvent(new CustomEvent('startCheckout', { detail: { name, email } }));
          }
        }}>Checkout</button>
      </div>
    </aside>
  );
}
