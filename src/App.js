import { createContext, useEffect, useState, useReducer, useMemo } from "react";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { db } from "./Components/Firebase/initialisation";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./Components/Product/ProductPage";
import ProductDetails from "./Components/Product/ProductDetails";
import ProductDetailsCopy from "./Components/Product/ProductDetailsCopy";
import { BrowserRouter } from "react-router-dom";
import dummyData from "./dummyData";
import WishList from "./Components/Authentication/ManageAuth";
import CartPage from "./Components/Cart/CartPage";
import { ItemProvider } from "./Components/Cart/CartContext";
import reducer from "./Components/Cart/CartReducer";
import { auth } from "./Components/Firebase/initialisation";
import { onAuthStateChanged } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { async } from "@firebase/util";

const Initialstate = [];

export const CoffeeContext = createContext({});

function App() {
  // Context Auth
  const [loggedIn, setLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState({
    id: "",
    name: "",
    email: "",
  });
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserDetails({
          id: user.uid,
          name: user.displayName,
          email: user.email,
        });
        setLoggedIn(true);
      } else setLoggedIn(false);
    });
  }, []);

  // CONTEXT CART
  const [state, dispatch] = useReducer(reducer, Initialstate);
  const addToCart = (id, Name, Price, Image, Quantity) => {
    dispatch({
      type: "ADD_TO_CART",
      id: id,
      Name: Name,
      Price: Price,
      Image: Image,
      Quantity: Quantity,
    });
  };
  const RemoveFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", id });
  };

  const stateLength = useMemo(() => {
    return state.length;
  }, [state]);
  // Context WishList
  // const [wishlist, distribute] = useReducer(reducer, Initialstate);
  // const addToWishlist = (id, Name, Price, Image, Quantity, Rating) => {
  //   distribute({
  //     type: "ADD_TO_WISHLIST",
  //     id: id,
  //     Name: Name,
  //     Price: Price,
  //     Image: Image,
  //     Rating,
  //     Quantity: Quantity,
  //   });
  // };
  // const RemoveFromWishlist = (id) => {
  //   distribute({ type: "REMOVE_FROM_WISHLIST", id });
  // };
  // const wishListLength = useMemo(() => {
  //   return wishlist.length;
  // }, [wishlist]);
  // FIREBASE QUERY
  const [coffeeData, setCoffeeData] = useState();
  useEffect(() => {
    const FetchCoffeeDataFromFireStore = async () => {
      const data = await getDocs(collection(db, "coffeeDatabase"));
      const coffeContainer = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setCoffeeData(coffeContainer);
    };
    FetchCoffeeDataFromFireStore();
  }, []);

  const Store = {
    coffeeData,
    state,
    // wishlist,
    // wishListLength,
    // addToWishlist,
    // RemoveFromWishlist,
    stateLength,
    addToCart,
    RemoveFromCart,
    loggedIn,
    userDetails,
  };

  return (
    <CoffeeContext.Provider value={Store}>
      {/* <ItemProvider> */}
      <BrowserRouter>
        <div className="  ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/collections/the-caffiene-factory"
              element={<ProductPage />}
            />
            <Route
              path="/collections/the-caffiene-factory/:id/:name/:category"
              element={<ProductDetails />}
            />
            {/* <Route
              path="/collections/the-caffiene-factory/auth"
              element={<ManageAuth />} */}

            <Route path="/checkout/cart" element={<CartPage />} />
            {/* <Route path="/wishlist" element={<WishList />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
      {/* </ItemProvider> */}
    </CoffeeContext.Provider>
  );
}
export default App;

// = async () => {
//   const data = await getDocs(collection(db, "coffeeDatabase"));
//   const coffeContainer = data.docs.map((doc) => ({
//     ...doc.data(),
//     id: doc.id,
//   }));
//   return coffeContainer;
// };
// FetchCoffeeDataFromFireStore().then((res) => setCoffeeData(res));
// console.log(coffeeData);
