import React, { useContext, useEffect, useMemo, useState } from "react";
import NavBar from "../Navbar";
import { CartContext, ItemContext } from "./CartContext";
import { CoffeeContext } from "../../App";
import Container from "../Container";
import gif from "../Assets/Coffee-Loading.gif";
import { Link } from "react-router-dom";
import { HiOutlineTrash } from "react-icons/hi";

const CartPage = () => {
  const { state, RemoveFromCart, loggedIn, stateLength } =
    useContext(CoffeeContext);
  console.log(state);
  const Total = useMemo(() => {
    let i = 0;
    state.map((item) => {
      i = i + item.Price;
    });
    return i;
  }, [state]);

  return (
    <Container>
      <div className="">
        <NavBar />
        <h2 className="text-3xl mb-6 mt-10">Items {`(${state.length})`}</h2>
        {loggedIn ? (
          <div className="cart-wrapper grid mt-8  gap-6">
            <div className="flex flex-col gap-4">
              {state.map((item) => {
                const { id } = item;
                if (item.Name !== "")
                  return (
                    <div className="">
                      <section className="flex items-center">
                        <img
                          src={item.Image}
                          className="w-32 h-full border-2 p-2 rounded-lg"
                        />
                        <div className="flex flex-col ml-6  gap-2">
                          <div className="text-xl">{item.Name}</div>
                          <div className="flex leading-none text-primary-800 font-bold">
                            ${item.Price.toFixed(2)}
                          </div>

                          {item.Name !== "" && (
                            <button
                              className="border mt-2 h-8 w-8 flex justify-center items-center px-2 rounded-lg"
                              onClick={() => RemoveFromCart(id)}>
                              <HiOutlineTrash />
                            </button>
                          )}
                        </div>
                      </section>
                    </div>
                  );
              })}
            </div>
            <div className="border-l px-4 flex flex-col gap-2 ">
              {state.map((elem) => (
                <div className="flex justify-between  text-sm">
                  <p>{elem.Name}</p>
                  <p className="ml-auto text-primary-800 font-bold">
                    ${elem.Price}
                  </p>
                </div>
              ))}
              <div className="flex justify-between border-t mt-1 py-2 text-lg ">
                <p className="">Subtotal:</p>
                <p className="ml-auto text-primary-800 font-bold">{`$${Total.toFixed(
                  2
                )}`}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="font-Nunito">
            <div className="flex justify-center mt-[15%]">
              <img src={gif} className="rounded-2xl h-40  w-56 " />
            </div>
            <div className="flex justify-center mt-2">
              <h1>Hey It's Empty</h1>
            </div>
            <div className="flex justify-center opacity-40">
              <p>There's Nothing In Your Cart. Let's Add Some Items</p>
            </div>
            <div className="mt-7 ">
              <Link
                to="/collections/the-caffiene-factory"
                className=" border-2 p-2 ml-[40%] rounded-lg">
                Add Items From The Shop
              </Link>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default CartPage;
