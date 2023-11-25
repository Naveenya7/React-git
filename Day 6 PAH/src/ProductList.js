import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} - {product.category}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;