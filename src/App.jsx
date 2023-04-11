import React, { createContext } from 'react';
import Header from './components/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
export const ProductContext = createContext([])

const App = () => {
  const { cartArray, products } = useLoaderData();

  return (
    <ProductContext.Provider value={products}>
      <Header></Header>
      <Outlet></Outlet>
    </ProductContext.Provider>
  );
};

export default App;