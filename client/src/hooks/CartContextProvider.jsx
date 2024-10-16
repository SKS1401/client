import React from "react";
import { Children, createContext } from "react";
import { useCart } from "./useCart";

 export const CartContext=createContext(); 
 export function CartContextProvider({children}) {
    const {cart,AddToCart,RemoveFromCart}=useCart();

    return (
        <div>
             <CartContext.Provider value={{
                 cart,
                AddToCart,
                RemoveFromCart, }} >
            {children}
            </CartContext.Provider>

        </div>
    );
}