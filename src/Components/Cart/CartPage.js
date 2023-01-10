import React, { useContext, useEffect, useMemo, useState } from "react";
import NavBar from "../Navbar";
import { CartContext, ItemContext } from "./CartContext";
import { CoffeeContext } from "../../App";
import Container from "../Container";
import gif from "../Assets/Coffee-Loading.gif";
import { Link } from "react-router-dom";

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
        {loggedIn ? (
          <div>
            {" "}
            Items on Cart: {stateLength}
            {state.map((item) => {
              const { id } = item;
              if (item.Name !== "")
                return (
                  <div>
                    <section className="flex mt-10 mb-10">
                      <img
                        src={item.Image}
                        className="w-40 h-40 border-2 p-2 rounded-lg"
                      />
                      <div className="flex ml-8 mt-5">
                        <div className="">{item.Name}</div>
                        <div className="flex justify-center">${item.Price}</div>
                        <div className=""></div>

                        {item.Name !== "" && (
                          <button
                            className="border-2"
                            onClick={() => RemoveFromCart(id)}
                          >
                            Remove Item
                          </button>
                        )}
                      </div>
                    </section>

                    <hr />
                  </div>
                );
            })}
            <p>
              SubTotal ({stateLength}) item : {`$${Total}`}
            </p>
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
                className=" border-2 p-2 ml-[40%] rounded-lg"
              >
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
