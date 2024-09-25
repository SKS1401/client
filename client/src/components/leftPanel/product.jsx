import React from "react";
import { Product_card } from "./product_card";
import './product.css';
import { useProduct } from "../../api/queries/useProduct";

export function Product() {

   const {products}=useProduct();
      
      // Example usage
  // Outputs: External SSD 1TB
      
   
    return (
        <div class="product-container">
            {products.map((p) => (
                <Product_card a={p}   />
            ))}
        </div>

    );
}