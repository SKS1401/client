import React from "react";
import { useContext } from "react";
import { CartContext } from "../../App";

export function Product_card({a}) {
const {AddToCart}=useContext(CartContext);

    const handleAddToCart=() => {
       AddToCart(a);
    }
    return (
    

    <div class="products">
        <img src={a.image} alt={a.name}/> 
         <h5>{a.name}</h5>
         <h5>${a.price}</h5>

        <button class="b1" onClick={handleAddToCart} >Add to Cart</button>
    </div>
    );
}