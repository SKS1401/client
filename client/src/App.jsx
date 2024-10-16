import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import { useCart } from "./hooks";
import { createContext, useState } from "react";
import { Leftpanel } from './components/leftPanel/leftpanel';
import { Rightpanel } from './components/rightPanel/rightpanel';
import './App.css';
import {Homepage} from './hooks/pages';
import Contact from './hooks/pages/contacts/Contact';

import { CartContextProvider } from "./hooks/CartContextProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Homepage />),
  },
  {
    path: "/contacts",
    element: (<Contact/>),
  },
]);

 function App() {

  ///next din class shurur age app function ekdom neat & clean korte hobe
  return (
     <RouterProvider router={router} />
  );
 
 }

export default App;
