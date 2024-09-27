import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { ProductService } from "../service";


export const useProduct=()=> {
    const [products,setProduct]=useState([]);
    const [isLoading,setisLoading]=useState(false);
    const loadProducts= useCallback(()=>{ async()=> {
        try {
            setisLoading(true);
            const products = await ProductService.getProduct();
             setProduct(products);
        }
        catch(error) {
            alert('Failed to load products!');
            console.log(error);
        }
        finally {
            setisLoading(false);
        }
        
    }  
    },[]); 
   
   
    useEffect( ()=> {
        loadProducts();
    },[loadProducts]);
    return {products,isLoading};
}