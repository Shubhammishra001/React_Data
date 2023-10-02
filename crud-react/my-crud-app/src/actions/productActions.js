

export const addProduct = (product) => {
  return {
    type: 'ADD_PRODUCT',
    payload: product,
  };
};

export const editProduct = (product) => {
  console.log("edit "+product)
  return { 
    type: 'EDIT_PRODUCT',
    payload: product,
  };
};

export const deleteProduct = (productId) => {
  return {
    type: 'DELETE_PRODUCT',
    payload: productId,
  };
};
