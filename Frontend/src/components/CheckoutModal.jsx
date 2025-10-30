import React, { useEffect, useState } from 'react';
import { fetchCart } from '../api';

export default function CheckoutModal({ onCheckout, receipt }) {
  const [open, setOpen] = useState(false);
  const [cartSnapshot, setCartSnapshot] = useState({ items: [], total: 0 });
  const [form, setForm] = useState({ name: '', email: '' });

  useEffect(() => {
    const handler = async (e) => {
      const { name, email } = e.detail || {};
      const cart = await fetchCart();
      setCartSnapshot(cart);
      setForm({ name: name || '', email: email || '' });
      setOpen(true);

      // If the event fired without name/email, we still show the form
    };
    window.addEventListener('startCheckout', handler);
    return () => window.removeEventListener('startCheckout', handler);
  }, []);

  useEffect(() => {
    if (receipt) {
      alert(`Order placed! Total: ₹${receipt.total}\nOrder ID: ${receipt.orderId || ''}`);
      setOpen(false);
    }
  }, [receipt]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return alert('Name & email required');
    await onCheckout(form);
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div style={{
      position:'fixed', inset:0, background:'rgba(0,0,0,0.4)', display:'flex', alignItems:'center', justifyContent:'center'
    }}>
      <div style={{background:'white', padding:20, borderRadius:8, width:400}}>
        <h3>Checkout</h3>
        <div className="small">Total: ₹{cartSnapshot.total}</div>
        <form onSubmit={handleSubmit}>
          <div style={{marginTop:8}}>
            <input placeholder="Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} style={{width:'100%', padding:8}} />
          </div>
          <div style={{marginTop:8}}>
            <input placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} style={{width:'100%', padding:8}} />
          </div>
          <div style={{marginTop:12, display:'flex', gap:8}}>
            <button className="btn" type="submit">Place Order</button>
            <button className="btn" type="button" style={{background:'#6b7280'}} onClick={()=>setOpen(false)}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
