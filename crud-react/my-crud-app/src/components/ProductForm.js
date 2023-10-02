// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addProduct, editProduct, deleteProduct } from '../actions/productActions';
// const ProductForm = () => {
//   const dispatch = useDispatch();
//   const { products } = useSelector((state) => state.products);

//   const [editProductId, setEditProductId] = useState(null);
//   const [formData, setFormData] = useState({ name: '', price: '' });

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (editProductId !== null) {
//       // Editing existing product
//       const updatedProducts = products.map((product) => {
//         if (product.id === editProductId) {
//           return { ...formData, id: editProductId };
//         }
//         return product;
//       });

//       dispatch(editProduct(updatedProducts));
//       setEditProductId(null); // Clear edit mode
//     } else {
//       // Adding a new product
//       dispatch(addProduct({ ...formData, id: Date.now() }));
//     }

//     setFormData({ name: '', price: '' });
//   };

//   const handleDelete = (productId) => {
//     dispatch(deleteProduct(productId));
//   };

//   const handleEdit = (product) => {
//     // Set the editProductId and populate the form with the product's data
//     setEditProductId(product.id);
//     setFormData({ name: product.name, price: product.price });
//   };

//   return (
//     <div>
//       <h2>{editProductId !== null ? 'Edit Product' : 'Add Product'}</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Product Name"
//           value={formData.name}
//           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//           required
//         />
//         <input
//           type="number"
//           placeholder="Product Price"
//           value={formData.price}
//           onChange={(e) => setFormData({ ...formData, price: e.target.value })}
//           required
//         />
//         <button type="submit">{editProductId !== null ? 'Update' : 'Add'}</button>
//         {editProductId !== null && (
//           <button
//             type="button"
//             onClick={() => {
//               setEditProductId(null);
//               setFormData({ name: '', price: '' });
//             }}
//           >
//             Cancel
//           </button>
//         )}
//       </form>

//       <h2>Product List</h2>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//           {product.name} , ${product.price}
//             <button onClick={() => handleDelete(product.id)}>Delete</button>
//             <button onClick={() => handleEdit(product)}>Edit</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// export default ProductForm;


//---------------------------------------
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, editProduct, deleteProduct } from '../actions/productActions';

const ProductForm = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const [editMode, setEditMode] = useState(false);
  const [editProductId, setEditProductId] = useState(null);
  const [formData, setFormData] = useState({ name: '', price: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editMode) {
      const updatedProduct = { ...formData, id: editProductId };
      dispatch(editProduct(updatedProduct));
      setEditMode(false); // Exit edit mode
    } else {
      const newProduct = { ...formData, id: Date.now() };
      dispatch(addProduct(newProduct));
    }

    setFormData({ name: '', price: '' });
  };

  const handleDelete = (productId) => {
    dispatch(deleteProduct(productId));
  };

  const handleEdit = (product) => {
    setEditMode(true);
    setEditProductId(product.id);
    setFormData({ name: product.name, price: product.price });
  };

  return (
    <div>
      <h2>{editMode ? 'Edit Product' : 'Add Product'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Product Price"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          required
        />
        <button type="submit">{editMode ? 'Update' : 'Add'}</button>
        {editMode && (
          <button
            type="button"
            onClick={() => {
              setEditMode(false);
              setEditProductId(null);
              setFormData({ name: '', price: '' });
            }}
          >
            Cancel
          </button>
        )}
      </form>

      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}, ${product.price}
            <button onClick={() => handleDelete(product.id)}>Delete</button>
            <button onClick={() => handleEdit(product)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductForm;
