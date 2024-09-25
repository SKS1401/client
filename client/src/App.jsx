import React from "react";
import { useCart } from "./hooks";
import { createContext, useState } from "react";
import { Leftpanel } from './components/leftPanel/leftpanel';
import { Rightpanel } from './components/rightPanel/rightpanel';
import './App.css';
export const CartContext=createContext();   

 
 function App(){
  ///next din class shurur age app function ekdom neat & clean korte hobe
  
  const {cart,AddToCart,RemoveFromCart}=useCart();
  return (

<CartContext.Provider value={{
    cart,
    AddToCart,
    RemoveFromCart,
  }}
  >
  
    <div className="App">
  
    <Leftpanel    />
    <Rightpanel    />
    </div>
   </CartContext.Provider>
 );
}     

 



export default App;
