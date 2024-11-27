import React, { createContext, useState } from "react";

const ProductContext = createContext("");
const ProductDispatchContext = createContext<any>(undefined);

function ProductProvider({ children }: any) {
  const [userDetails, setUserDetails] = useState("");

  return (
    <ProductContext.Provider value={userDetails}>
      <ProductDispatchContext.Provider value={setUserDetails}>
        {children}
      </ProductDispatchContext.Provider>
    </ProductContext.Provider>
  );
}

export { ProductProvider, ProductContext, ProductDispatchContext };
