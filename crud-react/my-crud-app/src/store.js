import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './reducers/rootReducer';

const initialState = {
    products: [], 
    
  };
  console.log(initialState.products);
  
const store = configureStore({reducer:rootReducer},initialState);

export default store;
// Redux store setup (example)
