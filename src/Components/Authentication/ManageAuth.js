// import React, { useContext, useEffect } from "react";
// import NavBar from "../Navbar";
// import { Link } from "react-router-dom";
// import gif from "../Assets/Coffee-Loading.gif";
// import { CoffeeContext } from "../../App";
// import Container from "../Container";
// import { AiFillStar, AiOutlineSortAscending } from "react-icons/ai";

// const WishList = () => {
//   const { wishlist, loggedIn, addToCart, RemoveFromWishlist, wishListLength } =
//     useContext(CoffeeContext);
//   return (
//     <div>
//       <Container>
//         <NavBar />
//         <div className="mt-7 font-Nunito text-lg">
//           My Wishlist {wishListLength} item
//         </div>
//         {loggedIn ? (
//           <div>
//             {wishlist.map((elem) => (
//               <div>
//                 <div>
//                   <Link
//                     to={`/collections/the-caffiene-factory/${elem.id}/${elem.Name}/${elem.Category}`}
//                   >
//                     <div className="grid grid-cols-2 border-2 rounded-3xl mt-10">
//                       <div>
//                         <img src={elem.Image} className="ml-3 h-72 w-72 p-1" />
//                       </div>
//                       <div className="mt-8">
//                         {" "}
//                         <div className="text-4xl">{elem.Name}</div>
//                         <div className="text-2xl font-Nunito">
//                           ${elem.Price}
//                         </div>
//                         <div className="text-lg">{elem.Rating}</div>
//                         <div className="-mt-5 ml-6 text-starPri-800">
//                           <AiFillStar />
//                         </div>
//                       </div>
//                     </div>
//                   </Link>
//                 </div>
//                 <button
//                   className="mt-5 flex justify-center text-xl border-2 p-1 px-4 rounded-lg"
//                   onClick={() => {
//                     RemoveFromWishlist(elem.id);
//                     addToCart(
//                       elem.id,
//                       elem.Name,
//                       elem.Price,
//                       elem.Image,
//                       elem.Quantity
//                     );
//                   }}
//                 >
//                   Add To Cart
//                 </button>
//                 <button
//                   className="mt-5 flex justify-center text-xl border-2 p-1 px-4 rounded-lg"
//                   onClick={() => {
//                     RemoveFromWishlist(elem.id);
//                   }}
//                 >
//                   Remove From Wishlist
//                 </button>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div>
//             <div>
//               <div className="flex justify-center mt-[15%]">
//                 <img src={gif} className="rounded-2xl h-40  w-56 " />
//               </div>
//             </div>
//           </div>
//         )}
//       </Container>
//     </div>
//   );
// };

// export default WishList;

// import React, { useContext } from "react";
// import { CoffeeContext } from "../../App";

// const WishList = () => {
//   const { coffeeData } = useContext(CoffeeContext);
//   return <div>WishList</div>;
// };

// export default WishList;
