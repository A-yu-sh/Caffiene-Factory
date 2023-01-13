import React, { useContext, useState, useEffect, useMemo } from "react";
import { db } from "./Firebase/initialisation";
import { Link } from "react-router-dom";
import { getDocs, getDoc, doc, collection } from "firebase/firestore";
import Container from "./Container";
import NavBar from "./Navbar";
import { CoffeeContext } from "../App";
import { MdDelete } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

const Wishlist = () => {
  const {
    coffeeData,
    wishlistedItems,
    userDetails,
    addToCart,
    HandleWishList,
  } = useContext(CoffeeContext);
  // addToCart = (id, Name, Price, Image, Quantity)
  const [isItem, setIsItem] = useState(false);
  const [isList, setIsList] = useState(false);
  return (
    <div>
      <Container>
        <NavBar />
        <div>
          {isItem ? (
            <div className="p-5 bg-green-100 text-green-700 text-lg rounded-lg mt-10 flex justify-between items-center">
              <p>{`Item Added To Cart`}</p>
              <button
                className="ml-auto underline underline-offset-4"
                onClick={() => setIsItem(false)}>
                <FaTimes color="#15803D" fill="#15803D" stroke="#15803D" />
              </button>
            </div>
          ) : (
            <div></div>
          )}
          {isList ? (
            <div className="p-5 bg-red-100 text-red-700 text-lg rounded-lg mt-10 flex justify-between items-center">
              {`Item Removed From Wishlist`}
              <button
                className="ml-auto underline underline-offset-4"
                onClick={() => setIsList(false)}>
                <FaTimes color="#B91C1C" fill="#B91C1C" stroke="#B91C1C" />
              </button>
            </div>
          ) : (
            <div></div>
          )}
          <section className="flex gap-4 mt-16">
            {wishlistedItems[0] &&
              wishlistedItems.map((item) => (
                <>
                  <div>
                    {" "}
                    <div className="flex">
                      <div className="flex flex-col border-2 rounded-xl overflow-hidden border-opacity-20">
                        <Link
                          to={`/collections/the-caffiene-factory/${item.id}/${item.Name}/${item.Category}`}>
                          <div>
                            <div className="rounded-lg relative overflow-hidden flex justify-center items-center opacity-90 ">
                              <img
                                src={item.Image}
                                className=" object-cover hover:opacity-100 hover:scale-[1.1] transition-all ease-in duration-[150ms] h-64 w-64"
                              />
                            </div>
                            <div className="p-5">
                              <p className="text-[12px] leading-none text-primary-800 font-Nunito">
                                {item.Size}
                              </p>
                              <h1 className="text-lg leading-none mb-3 font-Nunito mt-1">
                                {item.Name}
                              </h1>
                              <p className="text-2xl leading-none text-primary-800 font-Nunito  font-bold">
                                ${item.Price}
                              </p>
                            </div>
                          </div>
                        </Link>
                        <hr />
                        <div className="flex px-4 pb-2 items-center font-semibold font-Nunito text-primary-800 text-sm mt-2 justify-between">
                          <button
                            className=""
                            onClick={() => {
                              HandleWishList(
                                item.id,
                                item.Name,
                                item.Price,
                                item.Image,
                                item.Quantity,
                                item.Rating,
                                "delete"
                              );
                              setIsList(true);
                            }}>
                            Remove Item
                          </button>

                          <button
                            className="ml-auto"
                            onClick={() => {
                              addToCart(
                                item.id,
                                item.Name,
                                item.Price,
                                item.Image,
                                item.Quantity
                              );
                              HandleWishList(
                                item.id,
                                item.Name,
                                item.Price,
                                item.Image,
                                item.Quantity,
                                item.Rating,
                                "delete"
                              );
                              setIsItem(true);
                            }}>
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                </>
              ))}
          </section>
        </div>
      </Container>
    </div>
  );
};

export default Wishlist;
