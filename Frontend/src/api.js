import axios from 'axios';
const API_BASE = 'http://localhost:5000';

export const api = axios.create({
  baseURL: API_BASE + '/api',
  headers: { 'Content-Type': 'application/json' }
});

// product list
export const fetchProducts = () => api.get('/products').then(r => r.data);

// cart
export const fetchCart = () => api.get('/cart').then(r => r.data);
export const addToCart = (productId, qty=1) => api.post('/cart', { productId, qty }).then(r=>r.data);
export const removeFromCart = (cartItemId) => api.delete(`/cart/${cartItemId}`).then(r=>r.data);
export const updateCartQty = (cartItemId, qty) => api.patch(`/cart/${cartItemId}`, { qty }).then(r=>r.data);

// checkout
export const checkout = (payload) => api.post('/checkout', payload).then(r=>r.data);
