import React from 'react';
import ProductCard from './ProductCard';

export default function ProductList({ products, onAdd }) {
  return (
    <div>
      <h2 style={{marginLeft:8,textAlign:'center',fontSize:30}}>Products</h2>
      <div className="products">
        {products.map(p => (
          <ProductCard key={p._id} product={p} onAdd={() => onAdd(p._id)} />
        ))}
      </div>
    </div>
  );
}

