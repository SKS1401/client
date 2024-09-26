import React, { useEffect, useState } from "react";
import { Product_card } from "./product_card";
import './product.css';
//import { useProduct } from "../../api/queries/useProduct";

export function Product() {
    const [products,setProduct]=useState([]);
    useEffect(()=> {
        fetch('http://localhost:8000/api/products').then((res)=> res.json()).then((data)=>setProduct(data))
        .catch((error)=> {
            alert("Failed to Load Products!!");
            console.log(error);
        });
    },[]);
   // 


   //const {products}=useProduct();
      
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