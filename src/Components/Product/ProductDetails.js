import { doc, getDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { useParams, redirect, Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import Container from "../Container";
import { db } from "../Firebase/initialisation";
import NavBar from "../Navbar";
import { GiShoppingCart } from "react-icons/gi";
import gif from "../Assets/Coffee-Loading.gif";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import PopularProduct from "./ToggleData";
import { CoffeeContext } from "../../App";
import ToggleAccordion from "./ToggleData";
import PopularProducts from "./PopularProducts";

const ProductDetails = () => {
  // const [wishItems, setWishItems] = useState();
  // const GetInfo = (item) => {
  //   setWishItems(item);
  // };
  // console.log(wishItems);
  const { id } = useParams();
  const { addToCart, loggedIn, itemAdded, coffeeData, HandleWishList } =
    useContext(CoffeeContext);
  const [price, setPrice] = useState(15);

  const [data, setData] = useState("");
  const FetchCoffeeDataFromFireStoreForProductDetails = async () => {
    const docRef = doc(db, "coffeeDatabase", id);
    const docSnap = await getDoc(docRef);
    setData(docSnap.data());
  };

  useEffect(() => {
    FetchCoffeeDataFromFireStoreForProductDetails();
  }, [id]);

  const {
    Image,
    Name,
    Rating,
    Price,
    Description,
    Size,
    Category,
    Origin,
    Flavour,
    Quantity,
    Processing,
  } = data;
  const [selectedWeight, setSelectedWeight] = useState(data.Size);
  // const HandlePrice = () => {addToWishlist
  //   if (setSelectedWeight(data.Size[0])) return setPrice(price);
  //   if (setSelectedWeight(data.Size[1])) return setPrice((price = price * 2));
  //   if (setSelectedWeight(data.Size[2])) return setPrice((price = price * 2.5));
  //   if (setSelectedWeight(data.Size[3])) return setPrice((price = price * 3));
  //   console.log(price);
  // };

  return (
    <div>
      {data ? (
        <div>
          <NavBar />
          <Container>
            <div className=" mt-40">
              {" "}
              <div className="grid grid-cols-2">
                <div>
                  <img src={Image} className="border-2 rounded-lg" />
                </div>

                <div>
                  <div className="font-Nunito text-3xl">{Name}</div>
                  <div>{}</div>
                  <div className=" flex text-[10px] gap-2">
                    {Category.map((categ, idx) => (
                      <div className="border-2 p-1 rounded-lg" key={idx}>
                        {categ}
                      </div>
                    ))}
                  </div>
                  <div className="font-Nunito text-3xl mt-5">${price}</div>

                  <div className="flex">
                    {Rating}
                    <div className="text-starPri-800 mt-1 ">
                      <AiFillStar />
                    </div>
                  </div>
                  <div className="font-Nunito text-lg mt-5">{Description}</div>
                  <div className="mt-4">
                    <div className="flex gap-4">
                      {Size.map((weight, idx) => (
                        <button
                          className={`border-2 p-1 rounded-xl  px-4 ${
                            selectedWeight === weight &&
                            "bg-primary-800 text-white"
                          }`}
                          onClick={() => {
                            setSelectedWeight(weight);
                            console.log(weight);
                            // HandlePrice();
                          }}>
                          {weight}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div></div>
                  <div>
                    {loggedIn ? (
                      <div>
                        <button
                          className="border-2 flex justify-center mt-3 p-2 px-48 rounded-lg text-1xl hover:bg-primary-800 hover:text-white"
                          onClick={() => {
                            addToCart(id, Name, Price, Image, Quantity);
                          }}>
                          {" "}
                          Add To Cart
                        </button>
                        <Link to="/wishlist">
                          <button
                            onClick={() =>
                              HandleWishList(
                                id,
                                Name,
                                Price,
                                Image,
                                Quantity,
                                "Add"
                              )
                            }
                            className="border-2 flex justify-center mt-3 p-2 px-48 rounded-lg text-1xl hover:bg-primary-800 hover:text-white">
                            Add to Wishlist
                          </button>
                        </Link>
                      </div>
                    ) : (
                      <div className="mt-5 flex justify-center text-2xl border-2 p-1 rounded-lg">
                        Please Login to purchase this product
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="border-2 mt-20 p-2 mb-10 text-xl">
              <div className="flex justify-between">
                <div className="pl-2 m-2 w-[20%]"> Origin: </div>
                <div className="w-full  border-l-2 pl-2 flex justify-start items-center">
                  {Origin}
                </div>
              </div>
              <div className="flex justify-between border-t-2">
                <div className="pl-2 m-2 w-[20%]"> Flavour: </div>
                <div className="w-full  border-l-2 pl-2 flex justify-start items-center">
                  {Flavour}
                </div>
              </div>
              <div className="flex justify-between border-t-2">
                <div className="pl-2 m-2 w-[20%]"> Processing </div>
                <div className="w-full  border-l-2 pl-2 flex justify-start items-center">
                  {Processing}
                </div>
              </div>
            </div>
            {/* <PopularProduct /> */}
            <ToggleAccordion />
            <PopularProducts id={id} />
          </Container>
        </div>
      ) : (
        <div>
          <div className="flex justify-center mt-[15%]">
            <img src={gif} className="rounded-2xl h-40  w-56 " />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
