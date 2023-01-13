import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import { SignInWithGoogle, auth } from "./Firebase/initialisation";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { CoffeeContext } from "../App";

const NavBar = () => {
  const { loggedIn, userDetails, stateLength, wishListLength } =
    useContext(CoffeeContext);
  return (
    <div>
      <div className="mt-20  font-Nunito text-xl flex justify-between items-center ">
        <h1 className="flex text-4xl mr-auto ">ਕੈਫੀਨ</h1>

        <Link
          to="/"
          className="px-8 hover:underline underline-offset-4 font-Nunito text-primary-800 decoration-secondary-800">
          Home
        </Link>

        <Link
          to="/collections/the-caffiene-factory"
          className="px-8 hover:underline underline-offset-4 text-primary-800 decoration-secondary-800">
          Shop
        </Link>
        <Link
          to="/wishlist"
          className="px-8 hover:underline underline-offset-4 text-primary-800 decoration-secondary-800">
          Wishlist
        </Link>
        <Link
          to="/checkout/cart"
          className="px-8 hover:underline underline-offset-4 text-primary-800 decoration-secondary-800">
          Cart
          {loggedIn ? (
            <div className="text-sm -mt-6 ml-12">({stateLength})</div>
          ) : (
            <div></div>
          )}
        </Link>
        {/* <Link
          to="/wishlist"
          className="px-8 hover:underline  text-primary-800 decoration-secondary-800"
        >
          Wishlist
          {loggedIn ? (
            <div className="text-sm -mt-6 ml-20">({wishListLength})</div>
          ) : (
            <div></div>
          )}
        </Link> */}
        {loggedIn ? (
          <button
            className="px-6 relative -mr-3 hover:underline underline-offset-4  text-primary-800 decoration-secondary-800"
            onClick={() => signOut(auth)}>
            {userDetails.name}
          </button>
        ) : (
          <button
            className="px-6 relative -mr-3 hover:underline  underline-offset-4 text-primary-800 decoration-secondary-800"
            onClick={() => SignInWithGoogle(auth)}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
