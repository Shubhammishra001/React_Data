import React from 'react';
import { useSelector } from 'react-redux';

const ProductList = () => {
  const products = useSelector((state) => state.products);

 
  if (!Array.isArray(products)) {
   return <div>No products available.</div>;
  }

  return (
    <div>
      <h2>Product List</h2>
      <ul>

        {console.log("pr"+ products)}

        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
