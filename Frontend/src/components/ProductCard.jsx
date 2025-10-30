import React from 'react';

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="card">
      <img src={product.image || 'https://via.placeholder.com/200'} alt={product.name} />
      <h4 style={{margin:'8px 0 4px'}}>{product.name}</h4>
      <div className="small">₹{product.price}</div>
      <button className="btn" onClick={onAdd}>Add to Cart</button>
    </div>
  );
}
