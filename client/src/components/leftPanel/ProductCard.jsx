import React from "react";
import { useContext } from "react";
import Button from '@mui/material/Button';
import { CartContext } from "../../hooks/CartContextProvider";


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
        <Button variant="contained"  onClick={handleAddToCart}>
            Add to Cart
        </Button>
     
    </div>
    );
}