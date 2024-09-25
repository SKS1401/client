import { ProductService } from "../service";

export const useProduct=()=> {
    const products=ProductService.getProduct();
    return {products};
}