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
import { CoffeeContext } from "../../App";
import ToggleAccordion from "./ToggleData";
import PopularProducts from "./PopularProducts";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart, loggedIn, itemAdded, coffeeData, HandleWishList } =
    useContext(CoffeeContext);

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

  const [selectedWeight, setSelectedWeight] = useState(Size);
  const [weightedPrice, setWeightedPrice] = useState(Price);

  useEffect(() => {
    setWeightedPrice(Price);
    setSelectedWeight(Size);
  }, [data]);

  function HandlePrice(weight) {
    switch (weight) {
      case "150g":
        setWeightedPrice(Price * 1);
        return;
      case "300g":
        setWeightedPrice(Price * 1.2);
        return;
      case "350g":
        setWeightedPrice(Price * 1.4);
        return;
      case "500g":
        setWeightedPrice(Price * 1.5);
        return;
      case "700g":
        setWeightedPrice(Price * 1.6);
        return;
      case "750g":
        setWeightedPrice(Price * 1.7);
        return;
      case "900g":
        setWeightedPrice(Price * 2);
        return;
    }
  }

  return (
    <div>
      {data ? (
        <div>
          <Container>
            <NavBar />
            <div className=" mt-40">
              <div className="grid grid-cols-2">
                <div>
                  <img src={Image} className="border-2 rounded-lg" />
                </div>
                <div>
                  <div className="font-Nunito text-3xl">{Name}</div>
                  <div className=" flex text-[12px] mt-2 gap-2">
                    {Category.map((categ, idx) => (
                      <div className="border p-1 px-3 rounded-lg" key={idx}>
                        {categ}
                      </div>
                    ))}
                  </div>
                  <div className="font-Nunito text-3xl mt-5">
                    ${weightedPrice && weightedPrice.toFixed(2)}
                  </div>

                  <div className="flex">
                    {Rating}
                    <div className="text-starPri-800 mt-1 ">
                      <AiFillStar />
                    </div>
                  </div>
                  <div className="font-Nunito text-lg mt-5">{Description}</div>
                  <div className="mt-4">
                    <div className="flex gap-2">
                      {Size.map((weight, idx) => (
                        <button
                          className={`border-2 p-1 rounded-xl  px-4 ${
                            selectedWeight === weight &&
                            "bg-primary-800 border-primary-800 text-white"
                          }`}
                          onClick={() => {
                            setSelectedWeight(weight);
                            HandlePrice(weight);
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
                          className="border-2 border-primary-800 flex w-full justify-center items-center mt-6 p-2 rounded-lg bg-primary-800  hover:opacity-80 text-white"
                          onClick={() => {
                            addToCart(id, Name, weightedPrice, Image, Quantity);
                          }}>
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
                            className="border-2 flex items-center w-full justify-center mt-3 p-2  rounded-lg  hover:bg-primary-800 hover:text-white">
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
            <div className="border-2 rounded-lg mt-20 px-2 mb-10 text-lg">
              <div className="flex justify-between">
                <div className="pl-2 m-2 w-[20%] text-lg opacity-80">
                  {" "}
                  Origin:{" "}
                </div>
                <div className="w-full  border-l pl-4 py-2 flex justify-start items-center">
                  {Origin}
                </div>
              </div>
              <div className="flex justify-between border-t">
                <div className="pl-2 m-2 w-[20%] text-lg"> Flavour: </div>
                <div className="w-full  border-l pl-4 py-2 flex justify-start items-center">
                  {Flavour}
                </div>
              </div>
              <div className="flex justify-between border-t">
                <div className="pl-2 m-2 w-[20%] text-lg"> Processing: </div>
                <div className="w-full  border-l pl-4  py-2 flex justify-start items-center">
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
