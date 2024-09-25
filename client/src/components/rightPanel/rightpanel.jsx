import React from "react";
import { Cart } from "./Cart";



export function Rightpanel() {


    return (
    <div>
        <h2>Cart</h2>
        <div>
         <Cart  />
        </div>
   
        <button class="b1">CheckOut</button>
    </div>
    );
}