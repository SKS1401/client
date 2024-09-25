import { useState } from "react";
export function useCart() {
   const [cart,setcart]=useState([]);
    const AddToCart=(a)=> {
      const productInCartIndex= cart.findIndex((cartItem)=> cartItem.id === a.id);
      if(productInCartIndex!==-1)
      {
          cart[productInCartIndex].quantity++;
          setcart([...cart]);
      }
      else
      {
         setcart([...cart,{...a,quantity:1}]);
      }
     
    }
    const RemoveFromCart=(ProductID)=> {
      const productInCartIndex=cart.findIndex((cartItem)=> cartItem.id===ProductID);
      if(cart[productInCartIndex].quantity>1)
        {cart[productInCartIndex].quantity--;
          setcart([...cart]);
        }
      else 
      {
        cart.splice(productInCartIndex,1);
        setcart([...cart]);
        
      } 
    }
    return {
      cart,
      AddToCart,
      RemoveFromCart,
    };
}