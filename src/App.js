import { createContext, useEffect, useState, useReducer, useMemo } from "react";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  getDoc,
  addDoc,
  arrayUnion,
  onSnapshot,
  updateDoc,
  arrayRemove,
  where,
} from "firebase/firestore";
import { db } from "./Components/Firebase/initialisation";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./Components/Product/ProductPage";
import ProductDetails from "./Components/Product/ProductDetails";
import ProductDetailsCopy from "./Components/Product/ProductDetailsCopy";
import { BrowserRouter } from "react-router-dom";
import dummyData from "./dummyData";
import CartPage from "./Components/Cart/CartPage";
import { ItemProvider } from "./Components/Cart/CartContext";
import reducer from "./Components/Cart/CartReducer";
import { auth } from "./Components/Firebase/initialisation";
import { onAuthStateChanged } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { async } from "@firebase/util";
import Wishlist from "./Components/Wishlist";
import "./index.css";
const Initialstate = [];

export const CoffeeContext = createContext({});

function App() {
  // FIREBASE QUERY
  const [coffeeData, setCoffeeData] = useState();
  useEffect(() => {
    const FetchCoffeeDataFromFireStore = async () => {
      const data = await getDocs(collection(db, "coffeeDatabase").where());
      const coffeContainer = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setCoffeeData(coffeContainer);
    };
    FetchCoffeeDataFromFireStore();
  }, []);

  // Context Auth
  const [loggedIn, setLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const [wishlistedItems, setWishlistsedItems] = useState([]);
  const [listData, setListData] = useState([]);
  useEffect(() => {
    let unsub = () => {};
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserDetails({
          id: user.uid,
          name: user.displayName,
          email: user.email,
        });
        // This code makes the items array when users is logged in
        setLoggedIn(true);
        const Ref = doc(db, "users", user.uid);
        setDoc(Ref, { Items: arrayUnion() }, { merge: true });
        // The Code below refetches the data every time data changes
        // Used for Displaying the data
        const GetId = async () => {
          const IdData = doc(db, `users`, `${user.uid}`);
          unsub = onSnapshot(IdData, (doc) => {
            setWishlistsedItems(doc.data().Items);
          });
        };
        GetId();
      } else setLoggedIn(false);
    });
    return () => {
      unsub();
    };
  }, []);

  // Handles the wishlist for adding and removing data
  const [wishlist, setWishlist] = useState([]);

  const HandleWishList = (id, Name, Price, Image, Quantity, type) => {
    const wishRef = doc(db, `users/${userDetails.id}`);
    if (type === "Add") {
      updateDoc(
        wishRef,
        { Items: arrayUnion({ id, Name, Price, Image, Quantity }) },
        { merge: true }
      ).then();
    } else {
      updateDoc(wishRef, {
        Items: arrayRemove({ id, Name, Price, Image, Quantity }),
      });
    }

    // getDatafromWishlist(id)
  };

  // get data from wishlist

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

  const Store = {
    coffeeData,
    state,

    listData,
    wishlistedItems,
    wishlist,
    HandleWishList,
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
        <div className="text-primary-800 ">
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
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        </div>
      </BrowserRouter>
      {/* </ItemProvider> */}
    </CoffeeContext.Provider>
  );
}
export default App;
