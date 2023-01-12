import React, { useContext, useState, useEffect, useMemo } from "react";
import { db } from "./Firebase/initialisation";
import { getDocs, getDoc, doc, collection } from "firebase/firestore";
import Container from "./Container";
import NavBar from "./Navbar";
import { CoffeeContext } from "../App";

const Wishlist = () => {
  const { coffeeData, wishlistedItems, userDetails, HandleWishList } =
    useContext(CoffeeContext);

  return (
    <div>
      <Container>
        <NavBar />
        <p>
          {wishlistedItems[0] &&
            wishlistedItems.map((item) => (
              <>
                {" "}
                <div>{item.Name}</div>{" "}
                <button
                  onClick={() =>
                    HandleWishList(
                      item.id,
                      item.Name,
                      item.Price,
                      item.Image,
                      item.Quantity,
                      "delete"
                    )
                  }>
                  Remove
                </button>
              </>
            ))}
        </p>
        <div></div>
      </Container>
    </div>
  );
};
// const userRef = doc(db, "users", `${userDetails.uid}`);
// const updateUser = (type, data, field) => {
//   if (type === "add") {
//     return updateDoc(userRef, { [field]: arrayUnion(data) });
//   }
//   return updateDoc(userRef, { [field]: arrayRemove(data) });
// id, Name, Price, Image, Quantity, type;
// };
export default Wishlist;
