// import { doc, getDoc } from "firebase/firestore";
// import React, { useEffect, useState, useContext } from "react";
// import { useParams } from "react-router-dom";
// import { AiFillStar, AiOutlineStar } from "react-icons/ai";
// import { ImStarHalf } from "react-icons/im";
// import Container from "../Container";
// import { db } from "../Firebase/initialisation";
// import NavBar from "../Navbar";
// import { Link } from "react-router-dom";
// import PopularProduct from "./PopularProduct";
// import { CoffeeContext } from "../../App";

// const ProductDetailsCopy = () => {
//   const { id } = useParams();
//   const [data, setData] = useState();
//   const coffeeData = useContext(CoffeeContext);

//   function getData() {
//     if (!coffeeData) return;
//     const coffeeDetails = coffeeData.filter((item) => item.id === id);
//     setData(...coffeeDetails);
//   }

//   useEffect(() => {
//     getData();
//   }, [id]);
//   //Add coffeeData in the dependency array when firebase is back

//   return (
//     <div>
//       {data ? (
//         <div>
//           <NavBar />
//           <Container>
//             <div className=" mt-40">
//               {" "}
//               <div className="grid grid-cols-2">
//                 <div>
//                   <img src={data.Image} className="border-2 rounded-lg" />
//                 </div>
//                 <div>
//                   <div className="font-Nunito text-3xl">{data.Name}</div>
//                   <div>{}</div>
//                   <div className=" flex text-[10px] gap-2">
//                     {data.Category.map((categ, idx) => (
//                       <div className="border-2 p-1 rounded-lg" key={idx}>
//                         {categ}
//                       </div>
//                     ))}
//                   </div>
//                   <div className="font-Nunito text-3xl mt-5">${data.Price}</div>

//                   <div className="flex">
//                     {data.Rating}
//                     <div className="text-starPri-800 mt-1 ">
//                       <AiFillStar />
//                     </div>
//                   </div>
//                   <div className="font-Nunito text-lg mt-5">
//                     {data.Description}
//                   </div>
//                   <div className="mt-4">
//                     <div className="flex gap-4">
//                       {data.Size.map((weight, idx) => (
//                         <button
//                           className="border-2 rounded-full px-5 py-2"
//                           key={idx}
//                         >
//                           {weight}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="border-2 flex justify-center mt-3 py-2 rounded-lg text-1xl">
//                     {/* <input type="number" /> */}
//                     <Link>Add To Cart</Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="border-2 mt-20 p-2 mb-10 text-xl">
//               <div className="flex justify-between">
//                 <div className="pl-2 m-2 w-[20%]"> Origin: </div>
//                 <div className="w-full  border-l-2 pl-2 flex justify-start items-center">
//                   {data.Origin}
//                 </div>
//               </div>
//               <div className="flex justify-between border-t-2">
//                 <div className="pl-2 m-2 w-[20%]"> Flavour: </div>
//                 <div className="w-full  border-l-2 pl-2 flex justify-start items-center">
//                   {data.Flavour}
//                 </div>
//               </div>
//               <div className="flex justify-between border-t-2">
//                 <div className="pl-2 m-2 w-[20%]"> Processing </div>
//                 <div className="w-full  border-l-2 pl-2 flex justify-start items-center">
//                   {data.Processing}
//                 </div>
//               </div>
//             </div>
//             <PopularProduct />
//           </Container>
//         </div>
//       ) : (
//         <div>Loading...</div>
//       )}
//     </div>
//   );
// };

// export default ProductDetailsCopy;
