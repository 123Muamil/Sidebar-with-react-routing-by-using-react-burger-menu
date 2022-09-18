import React, { createContext, useEffect, useReducer } from "react";
import { CartReducer, initializer } from "../Reducers/CartReducer";
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(CartReducer, [], initializer);

  useEffect(() => {
    localStorage.setItem("localCart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        dispatch
      }}
    >
      {children}
    </CartContext.Provider>
  );
};