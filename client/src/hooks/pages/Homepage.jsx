import React from "react";
import { CartContextProvider } from "../CartContextProvider";
import { Leftpanel } from "../../components/leftPanel/leftpanel";
import { Rightpanel } from "../../components/rightPanel/rightpanel";

export function Homepage() {
    return (
         <CartContextProvider>
         <div className="App">
           <Leftpanel></Leftpanel>
           <Rightpanel />
         </div>
       </CartContextProvider>
    );
   
 };