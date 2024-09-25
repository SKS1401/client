import { useContext } from "react";
import { CartItem } from "./CartItem";
import { CartContext } from "../../App";

export function Cart() {
    const {cart}=useContext(CartContext);
    
    return (
        <ul>
                {cart.map((cartItem)=> (
                    <div>
                        <CartItem cartItem={cartItem}  />
                    </div>
                   
                    
                ))}
        </ul>
    );
}