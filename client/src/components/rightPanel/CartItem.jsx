import React from 'react';
import { useContext } from 'react';
import './product.css';
import { CartContext } from '../../App';
export function CartItem({cartItem}) {
  const {RemoveFromCart}=useContext(CartContext);
    const handleRemoveFromCart=()=> {
        RemoveFromCart(cartItem.id);
    }
    return (
       <div>
         <li>{cartItem.name} x {cartItem.quantity} <button className="b3" onClick={handleRemoveFromCart}>Remove</button> </li>
       </div>
       
    );
}