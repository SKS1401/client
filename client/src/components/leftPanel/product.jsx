import React from "react";
import { Product_card } from "./ProductCard";
import './product.css';

import { useProduct } from "../../api/queries/useProduct";

export function Product() {
   
   


   const {products,isLoading}=useProduct();
      
   
      
   
    return (
        <div class="product-container">
            {/* ///conditional rendering */}
            {isLoading ? <h1>Loading Products.........</h1> :products.map((p) => (
                <Product_card a={p}  />
            )) }
            
        </div>

    );
}