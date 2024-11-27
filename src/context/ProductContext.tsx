import React, { createContext, useState } from "react";

// Create two context:
// ProductContext: to query the context state
// ProductDispatchContext: to mutate the context state
const ProductContext = createContext("");
const ProductDispatchContext = createContext<any>(undefined);

// A "provider" is used to encapsulate only the
// components that needs the state in this context
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
