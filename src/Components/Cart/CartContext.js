// import { createContext, useReducer } from "react";
// import reducer from "./CartReducer";
// export const ItemContext = createContext();

// const ItemProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, Initialstate);
//   const addToCart = (Name, Price) => {
//     dispatch({ type: "ADD_TO_CART", payload: { Name, Price } });
//   };
//   return (
//     <ItemContext.Provider value={{ ...state, addToCart }}>
//       {children}
//     </ItemContext.Provider>
//   );
// };

// export { ItemProvider };
